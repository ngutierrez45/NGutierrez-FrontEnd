import React from 'react';
import { render, screen } from '@testing-library/react';
import Movies from './movies';
import { movieSearch } from './functions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import xhrMock from 'xhr-mock'; 

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
}));

xhrMock.setup();

xhrMock.post('https://web.njit.edu/~nag45/SQLRUN2.php', (req, res) => {
  return res.status(200).body(JSON.stringify());
});

test("should call the 'movieSearch' function when the button is clicked", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </Router>
  );

  const openSpy = jest.spyOn(XMLHttpRequest.prototype, 'open');

  movieSearch("","Gina","Comedy");

  expect(openSpy).toHaveBeenCalledWith(
    'GET',
    'https://web.njit.edu/~nag45/SQLRUN2.php?actor=Gina&genre=Comedy'
  );

});
