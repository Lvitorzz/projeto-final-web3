const News = require('../models/newsModel');

exports.createNews = (req, res) => {
  News.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId });
  });
};

exports.getAllNews = (req, res) => {
  News.findAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    const news = results.map(row => ({
      id: row.id,
      date: row.date,
      title: row.title,
      content: row.content,
      tags: JSON.parse(row.tags),
      coverImageUrl: row.coverImageUrl
    }));
    res.json(news);
  });
};

exports.getNewsById = (req, res) => {
  News.findById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'News not found' });
    res.json({
      id: row.id,
      date: row.date,
      title: row.title,
      content: row.content,
      tags: JSON.parse(row.tags),
      coverImageUrl: row.coverImageUrl
    });
  });
};

exports.updateNews = (req, res) => {
  News.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'News not found' });
    res.json({ success: true });
  });
};

exports.deleteNews = (req, res) => {
  News.remove(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'News not found' });
    res.json({ success: true });
  });
};
