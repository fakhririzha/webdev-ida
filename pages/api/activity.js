const Activity = require('../../core/models/activity');

const handler = async (req, res) => {
    const activity = await Activity.find();
    res.status(200).json(activity);
};

export default handler;
