const Activity = require('../../core/models/activity');

const handler = async (req, res) => {
    if (!req.params.id) {
        res.status(400).json({ message: 'ID is required' });
    } else {
        const findActivity = await Activity.findById(req.params.id);

        if (!findActivity) {
            res.status(400).json({ message: 'Activity not found' });
        } else {
            await Activity.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: `Delete activity with id: ${req.params.id}` });
        }
    }
};

module.exports = handler;
