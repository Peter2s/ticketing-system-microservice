const bcrypt =  require("bcrypt")


export  class Password {
    static async HashPassword(password: String): Promise<String> {
        const saltRounds = Math.random() * 10;
        const salt = await bcrypt.genSalt( saltRounds);
        const hashedPassWord =  await bcrypt.hash(password, salt);
        return hashedPassWord;
    }

    static async    compare (existsPassword:String ,password:String):Promise<boolean>{
        return await bcrypt.compare(password,existsPassword);
    }
}