// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  const age = document.getElementById("user-age").value
  document.getElementById("user-age").innerHTML = age
  const day = document.getElementById("day").value
  document.getElementById("day").innerHTML = day

  if (day === "tuesday" || day === "thursday" || (age >= 12 && age <= 21)) {
    document.getElementById("determine").innerHTML =
      "You can get into the musuem."
  } else {
    document.getElementById("determine").innerHTML =
      "Sorry you can't get into the musuem"
  }
}
