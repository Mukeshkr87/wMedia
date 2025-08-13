import {asyncHandler} from '../utils/eventhandeller.js'
import {apiError} from '../utils/apiError.js'
import {user} from '../models/user.model.js'
import {uplaodOnCloudinary} from '../utils/cloudinary.js'
import apiResponse from '../utils/apiResponse.js' 
const registerUser = asyncHandler(async (req,res)=>{
    const {fullname,email,username,password} = req.body
    // if(fullname === ""){//For beginner
    //     throw new apiError(400,"Full name is required")
    // }
    if(
        [fullname,username,email,password].some((field)=>
        field?.trim() === "")
)   {
    throw new apiError(400,"All fields are required: ")
    }
    const existedUser = user.findOne({
        $or: [{email},{username}]
    })
    if(existedUser){
        throw new apiError(409,"User with email and user is already exist")
    }
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const converImageLocalPath = req.files?.converImage[0]?.path;
     if(!avatarLocalPath){
        throw new apiError(400,"Avatar file is required")
     }
     const avatar = await uploadOnCloudinary(avatarLocalPath);
     const coverImage = await uploadOnCloudinary(converImageLocalPath)
     if(avatar){
        throw new apiError(400,"Avatar file removed")
     }    
     const user = user.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
     })
     const createdUser = await user.findById(user._id).select(
        "-passWord -refershToken"
     );
     if(!createdUser){
        throw new apiError(500,"Something went wrong while reg of users")
     }
     return res.status(201).json(
        new apiResponse(200,createdUser,"User registered successfully")
     )
})

/*get user detail thorugh user
validation is not empty
check if user already exist
check for image
upload item from cloudinary,avatar
create user object-create user db
remove password and refresh field from response
check for user creation
return res
*/


export {registerUser}