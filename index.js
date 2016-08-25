module.exports = function(context) {
  return {
    hello: function(req, res) {
      var name = req.params.name;

      try {
        res.text(`Hey ${name}, this bot rocks!!`).send();
      } catch (queryError) {
        return res.text('An error has occurred while trying to get answers from StackOverflow.').send();
      }
    }
  }
};
