
import express from 'express';

module.exports = (app) => {
  app.get(express.static('./dist'));
};
