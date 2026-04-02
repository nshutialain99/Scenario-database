import {
    getAll,
    getById,
    create,
    update,
    remove
} from '../models/recModel.js';


// ============================
// GET ALL Recruitments
// ============================
export const getRecruitments = async (req, res) => {
    try {
        const data = await getAll();

        res.status(200).json({
            message: 'Fetched recruitments successfully',
            success: true,
            count: data.length,
            data
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Error fetching recruitments',
            success: false
        });
    }
};



// ============================
// GET Recruitment BY ID
// ============================
export const getRecruitmentById = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await getById(id);

        if (!data) {
            return res.status(404).json({
                message: 'Recruitment not found',
                success: false
            });
        }

        res.status(200).json({
            message: 'Recruitment fetched successfully',
            success: true,
            data
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Error fetching recruitment',
            success: false
        });
    }
};



// ============================
// CREATE Recruitment
// ============================
export const createRecruitment = async (req, res) => {
    try {
        const result = await create(req.body);

        res.status(201).json({
            message: 'Recruitment created successfully',
            success: true,
            id: result?.insertId
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Error creating recruitment',
            success: false
        });
    }
};



// ============================
// UPDATE Recruitment
// ============================
export const updateRecruitment = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await update(id, req.body);

        if (result?.affectedRows === 0) {
            return res.status(404).json({
                message: 'Recruitment not found',
                success: false
            });
        }

        res.status(200).json({
            message: 'Recruitment updated successfully',
            success: true
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Error updating recruitment',
            success: false
        });
    }
};



// ============================
// DELETE Recruitment
// ============================
export const deleteRecruitment = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await remove(id);

        if (result?.affectedRows === 0) {
            return res.status(404).json({
                message: 'Recruitment not found',
                success: false
            });
        }

        res.status(200).json({
            message: 'Recruitment deleted successfully',
            success: true
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Error deleting recruitment',
            success: false
        });
    }
};