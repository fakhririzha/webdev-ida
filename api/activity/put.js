const Activity = require('../../core/models/activity');

const handler = async (req, res) => {
    if (!req.params.id) {
        res.status(400).json({ message: 'ID is required' });
    } else {
        const findActivity = await Activity.findById(req.params.id);

        if (!findActivity) {
            res.status(400).json({ message: 'Activity not found' });
        } else {
            const updatedActivity = await Activity.findByIdAndUpdate(
                req.params.id,
                {
                    name: req.body.name,
                },
                { new: true }
            );

            res.status(200).json(updatedActivity);
        }
    }
};

module.exports = handler;
