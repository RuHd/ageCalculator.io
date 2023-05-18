const date = new Date()

const currentDay = date.getDate()
const currentMonth = date.getMonth() + 1
const currentYear = date.getFullYear()

const today = [currentYear,currentMonth,currentDay]

const birthYear = document.querySelector(".year")
const birthMonth = document.querySelector(".month")
const birthDay = document.querySelector(".day")

const output = document.querySelectorAll(".output")
const errorMsg = document.querySelectorAll(".error--message")
const errorMsgDay = errorMsg[0]
const errorMsgMonth = errorMsg[1]
const errorMsgYear = errorMsg[2]

const birth = [birthYear,birthMonth,birthDay]

const dateTitles = document.querySelectorAll(".input--titles")

const btn = document.querySelector("button")