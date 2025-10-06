const { HomePage } = require("./homepage.page")


exports.pages={
    homePage(){
        return new HomePage
    }
}