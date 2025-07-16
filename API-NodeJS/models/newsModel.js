const db = require('../config/db');

exports.create = (news, callback) => {
  const { date, title, content, tags, coverImageUrl } = news;
  db.query(
    'INSERT INTO news (date, title, content, tags, coverImageUrl) VALUES (?, ?, ?, ?, ?)',
    [date, title, content, JSON.stringify(tags), coverImageUrl],
    (err, result) => callback(err, result)
  );
};

exports.findAll = (callback) => {
  db.query('SELECT * FROM news', (err, results) => callback(err, results));
};

exports.findById = (id, callback) => {
  db.query('SELECT * FROM news WHERE id = ?', [id], (err, results) => callback(err, results[0]));
};

exports.update = (id, news, callback) => {
  const { date, title, content, tags, coverImageUrl } = news;
  db.query(
    'UPDATE news SET date = ?, title = ?, content = ?, tags = ?, coverImageUrl = ? WHERE id = ?',
    [date, title, content, JSON.stringify(tags), coverImageUrl, id],
    (err, result) => callback(err, result)
  );
};

exports.remove = (id, callback) => {
  db.query('DELETE FROM news WHERE id = ?', [id], (err, result) => callback(err, result));
};
