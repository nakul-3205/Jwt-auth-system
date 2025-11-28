import {apiResponse} from '../utils/apiResponse.js'
import {ApiError} from '../utils/apiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'


const healthCheck=asyncHandler(async(req,res)=>{
    res.status(200).json(
        new apiResponse(200,{message:'Server is running'})
    )
})



export{healthCheck}