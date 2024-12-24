
const { Op } = require("sequelize");
const { Sequelize } = require("sequelize");

class CameraoverviewRepository {
    async fetchCameraOverview (sequelize) {
        try {
            // Query to fetch camera status data
            const query = `
                SELECT 
                    total_cameras,
                    on_duty_cameras,
                    off_duty_cameras
                FROM 
                    camera_status
                LIMIT 1; -- Assuming there's one row storing the overview
            `;
    
            // Execute the query
            const [cameraOverview] = await sequelize.query(query, {
                type: sequelize.QueryTypes.SELECT,
            });
    
            return cameraOverview;
        } catch (error) {
            console.error("Error in fetchCameraOverview repository:", error);
            throw error;
        }
    };
    
}

module.exports = new CameraoverviewRepository();
