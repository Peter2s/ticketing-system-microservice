const bcrypt =  require("bcrypt")


export  class Password {
    static async HashPassword(password: String): Promise<String> {
        const salt = Math.random() * 10;
        const hashedPassowrd =  await bcrypt.hash(password, salt);
        return `${hashedPassowrd}.${salt}`;
    }

    static  async  compare (password:String,existsPassword:String ):Promise<boolean>{
        const [existsHashedPassword,salt] = existsPassword.split('.');

        return await  bcrypt.compare(existsHashedPassword,password,salt);
    }
}