class apiResponse{
    constructor(statusCode,meassage = "Sucess",data){
        this.statusCode = statusCode
        this.meassage = meassage
        this.data = data
        this.success = statusCode<400
    }
}
export default apiResponse