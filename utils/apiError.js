class apiError extends Error{
    constructor(errors = [],stack = "",stausCode,message='Error happend'){
        super(message)
        this.stausCode = stausCode
        this.errors = errors
        this.data = null
        this.success = false
        this.message = message
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}

export {apiError}