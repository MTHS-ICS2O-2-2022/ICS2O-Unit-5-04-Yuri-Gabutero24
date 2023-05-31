// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const age = document.getElementById("user-age").value
  document.getElementById("user-age").innerHTML = age
  const day = document.getElementById("day").value
  document.getElementById("day").innerHTML = day

  if (day === "tuesday" || day === "thursday" || (age >= 12 && age <= 21)) {
    document.getElementById("price").innerHTML =
      "You're eligible for free admission!"
  } else {
    document.getElementById("price").innerHTML =
      "You're unfortunately unable to get free admission."
  }
}
