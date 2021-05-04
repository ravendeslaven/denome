const bcrypt = require('bcryptjs')
const helpers = {}

const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


















// Generate Hash
helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}


// Validation password
helpers.matchPassword = async (password, savedPassword) => {
    try {
        return await bcrypt.compare(password, savedPassword)
    } catch(e) {
        console.log(e)
    }
}

helpers.rolUser = async(rol) => {
    return 
}

module.exports = helpers