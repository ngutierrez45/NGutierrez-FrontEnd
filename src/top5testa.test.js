import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { actors } from './functions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import xhrMock from 'xhr-mock'; 

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
}));

xhrMock.setup();

xhrMock.post('https://web.njit.edu/~nag45/SQLRUN.php', (req, res) => {
  return res.status(200).body(JSON.stringify());
});

test("should call the 'actors' function when the button is clicked", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );

  const openSpy = jest.spyOn(XMLHttpRequest.prototype, 'open');

  actors();

  expect(openSpy).toHaveBeenCalledWith(
    'GET',
    'https://web.njit.edu/~nag45/SQLRUN.php?name=act'
  );

});