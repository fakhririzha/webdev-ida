const Activity = require('../../core/models/activity');

const handler = async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({ message: 'Name is required' });
    } else {
        const activity = await Activity.create({
            name: req.body.name,
        });
        res.status(200).json(activity);
    }
};

module.exports = handler;
