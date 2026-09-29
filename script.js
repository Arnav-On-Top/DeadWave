var introScreen = document.getElementById("introScreen");
var terminalScreen = document.getElementById("terminalScreen");
var deviceScreen = document.getElementById("deviceScreen");
var startButton = document.getElementById("startButton");
var sendButton = document.getElementById("sendButton");
var recordButton = document.getElementById("recordButton");
var muteButton = document.getElementById("muteButton");
var terminateButton = document.getElementById("terminateButton");
var messageInput = document.getElementById("messageInput");
var messageArea = document.getElementById("messageArea");
var currentStationText =
    document.getElementById("currentStationText");
var clock =
    document.getElementById("clock");
var systemStatus =
    document.getElementById("systemStatus");
var corruptionOverlay =
    document.getElementById("corruptionOverlay");
var corruptionText =
    document.getElementById("corruptionText");
var gameStarted = false;
var currentChannel = "04";
var channel00Found = false;
var sessionEnding = false;
var muted = false;
var secondsPassed = 0;
var finalBlackScreen = false;
function delayedMessage(sender, text, type, delay) {
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(sender, text, type);
    }, delay);
}
function openChannel01() {
    if (sessionEnding) {
        return;
    }
    currentChannel = "01";
    setActiveChannel("01");
    currentStationText.innerText =
        "CHANNEL 01 // STATION 03 // UNIT 12";

    clearMessages();
    addMessage(
        "SYSTEM",
        "Channel 01 connected",
        "system"
    );
    delayedMessage(
        "STATION 03",
        "Unit 12, report your position.",
        "station",
        1200
    );
    delayedMessage(
        "UNIT 12",
        "South access road. Visibility is poor.",
        "unit",
        3000
    );
    delayedMessage(
        "STATION 03",
        "Copy. Check the eastern fence before returning.",
        "station",
        4700
    );
    delayedMessage(
        "UNIT 12",
        "Copy. Eastern fence is clear so far.",
        "unit",
        6900
    );
}
function openChannel02() {
    if (sessionEnding) {
        return;
    }
    currentChannel = "02";
    setActiveChannel("02");
    currentStationText.innerText =
        "CHANNEL 02 // STATION 06 // UNIT 04";
    clearMessages();
    addMessage(
        "SYSTEM",
        "Channel 02 connected",
        "system"
    );
    delayedMessage(
        "STATION 06",
        "Unit 04, how is the water pump?",
        "station",
        1400
    );
    delayedMessage(
        "UNIT 04",
        "Pump is running. Pressure is slightly low.",
        "unit",
        3500
    );
    delayedMessage(
        "STATION 06",
        "Can you inspect the intake valve?",
        "station",
        5200
    );
    delayedMessage(
        "UNIT 04",
        "Already checking it. There is some ice around the pipe.",
        "unit",
        7600
    );
    delayedMessage(
        "STATION 06",
        "Understood. Do not shut the pump down.",
        "station",
        9300
    );
}
function openChannel03() {
    if (sessionEnding) {
        return;
    }
    currentChannel = "03";
    setActiveChannel("03");
    currentStationText.innerText =
        "CHANNEL 03 // STATION 11 // UNIT 21";

    clearMessages();
    addMessage(
        "SYSTEM",
        "Channel 03 connected",
        "system"
    );
    delayedMessage(
        "STATION 11",
        "Unit 21, confirm generator room status.",
        "station",
        1300
    );
    delayedMessage(
        "UNIT 21",
        "Generator one is normal.",
        "unit",
        3300
    );
    delayedMessage(
        "STATION 11",
        "Generator two?",
        "station",
        4900
    );
    delayedMessage(
        "UNIT 21",
        "Still offline. I am checking the control panel.",
        "unit",
        7100
    );
    delayedMessage(
        "STATION 11",
        "Keep generator one running. Report before touching anything.",
        "station",
        9300
    );
}
function openChannel04() {
    if (sessionEnding) {
        return;
    }
    currentChannel = "04";
    setActiveChannel("04");
    currentStationText.innerText =
        "CHANNEL 04 // STATION 17 // UNIT 08";

    clearMessages();
    addMessage(
        "SYSTEM",
        "Channel 04 connected",
        "system"
    );
    delayedMessage(
        "STATION 17",
        "Unit 08, confirm the north corridor.",
        "station",
        1300
    );
    delayedMessage(
        "UNIT 08",
        "North corridor is clear.",
        "unit",
        3400
    );
    delayedMessage(
        "STATION 17",
        "Any movement near the old storage rooms?",
        "station",
        5300
    );
    delayedMessage(
        "UNIT 08",
        "Negative. Only the ventilation fans.",
        "unit",
        7300
    );
    delayedMessage(
        "STATION 17",
        "Copy. Continue your inspection.",
        "station",
        9200
    );
}
function openChannel05() {
    if (sessionEnding) {
        return;
    }
    currentChannel = "05";
    setActiveChannel("05");
    currentStationText.innerText =
        "CHANNEL 05 // STATION 22 // UNIT 31";

    clearMessages();
    addMessage(
        "SYSTEM",
        "Channel 05 connected",
        "system"
    );
    delayedMessage(
        "STATION 22",
        "Unit 31, confirm weather equipment.",
        "station",
        1200
    );
    delayedMessage(
        "UNIT 31",
        "Wind sensor is working.",
        "unit",
        3200
    );
    delayedMessage(
        "STATION 22",
        "Temperature sensor?",
        "station",
        4900
    );
    delayedMessage(
        "UNIT 31",
        "Reading minus eleven.",
        "unit",
        6800
    );
    delayedMessage(
        "STATION 22",
        "That is lower than expected. Send another reading in ten minutes.",
        "station",
        9000
    );
}
function openChannel06() {
    if (sessionEnding) {
        return;
    }
    currentChannel = "06";
    setActiveChannel("06");
    currentStationText.innerText =
        "CHANNEL 06 // STATION 09 // UNIT 16";

    clearMessages();
    addMessage(
        "SYSTEM",
        "Channel 06 connected",
        "system"
    );
    delayedMessage(
        "STATION 09",
        "Unit 16, inventory report.",
        "station",
        1400
    );
    delayedMessage(
        "UNIT 16",
        "Medical supplies are accounted for.",
        "unit",
        3400
    );
    delayedMessage(
        "STATION 09",
        "Any missing equipment?",
        "station",
        5100
    );
    delayedMessage(
        "UNIT 16",
        "One emergency radio is missing.",
        "unit",
        7100
    );
    delayedMessage(
        "STATION 09",
        "Check the transport room. It may have been moved.",
        "station",
        9000
    );
}
function openChannel07() {
    if (sessionEnding) {
        return;
    }
    currentChannel = "07";
    setActiveChannel("07");
    currentStationText.innerText =
        "CHANNEL 07 // STATION 14 // UNIT 07";
    clearMessages();
    addMessage(
        "SYSTEM",
        "Channel 07 connected",
        "system"
    );
    delayedMessage(
        "STATION 14",
        "Unit 07, report from the east tower.",
        "station",
        1300
    );
    delayedMessage(
        "UNIT 07",
        "East tower is secure.",
        "unit",
        3400
    );
    delayedMessage(
        "STATION 14",
        "Do you have a visual on the lights outside?",
        "station",
        5300
    );
    delayedMessage(
        "UNIT 07",
        "Yes. Three lights near the ridge.",
        "unit",
        7400
    );
    delayedMessage(
        "STATION 14",
        "Those are probably the maintenance vehicles.",
        "station",
        9200
    );
    delayedMessage(
        "UNIT 07",
        "Probably.",
        "unit",
        11000
    );
}
function openChannel08() {
    if (sessionEnding) {
        return;
    }
    currentChannel = "08";
    setActiveChannel("08");
    currentStationText.innerText =
        "CHANNEL 08 // STATION 25 // UNIT 19";
    clearMessages();
    addMessage(
        "SYSTEM",
        "Channel 08 connected",
        "system"
    );
    delayedMessage(
        "STATION 25",
        "Unit 19, confirm rail switch position.",
        "station",
        1200
    );
    delayedMessage(
        "UNIT 19",
        "Switch is locked in position two.",
        "unit",
        3300
    );
    delayedMessage(
        "STATION 25",
        "Any vibration on the line?",
        "station",
        5100
    );
    delayedMessage(
        "UNIT 19",
        "Small vibration. Nothing unusual.",
        "unit",
        7300
    );
    delayedMessage(
        "STATION 25",
        "Log it and remain at the switch.",
        "station",
        9100
    );
}
function openChannel09() {
    if (sessionEnding) {
        return;
    }
    currentChannel = "09";
    setActiveChannel("09");
    currentStationText.innerText =
        "CHANNEL 09 // STATION 31 // UNIT 02";
    clearMessages();
    addMessage(
        "SYSTEM",
        "Channel 09 connected",
        "system"
    );
    delayedMessage(
        "STATION 31",
        "Unit 02, radio test.",
        "station",
        1300
    );
    delayedMessage(
        "UNIT 02",
        "Receiving you clearly.",
        "unit",
        3300
    );
    delayedMessage(
        "STATION 31",
        "Send your identification.",
        "station",
        5000
    );
    delayedMessage(
        "UNIT 02",
        "Unit 02. Technician group B.",
        "unit",
        7200
    );
    delayedMessage(
        "STATION 31",
        "Confirmed. Continue toward the west gate.",
        "station",
        9100
    );
}
function openChannel10() {
    if (sessionEnding) {
        return;
    }
    currentChannel = "10";
    setActiveChannel("10");
    currentStationText.innerText =
        "CHANNEL 10 // STATION 18 // UNIT 44";

    clearMessages();
    addMessage(
        "SYSTEM",
        "Channel 10 connected",
        "system"
    );
    delayedMessage(
        "STATION 18",
        "Unit 44, report on the archive room.",
        "station",
        1400
    );
    delayedMessage(
        "UNIT 44",
        "Archive room is locked.",
        "unit",
        3500
    );
    delayedMessage(
        "STATION 18",
        "Good. Do not open the old records cabinet.",
        "station",
        5300
    );
    delayedMessage(
        "UNIT 44",
        "Understood.",
        "unit",
        7000
    );
    delayedMessage(
        "STATION 18",
        "Return to the main corridor.",
        "station",
        8800
    );
}
function openChannel00() {
    if (sessionEnding) {
        return;
    }
    currentChannel = "00";
    setActiveChannel("00");
    channel00Found = true;
    currentStationText.innerText =
        "CHANNEL 00 // UNAUTHORIZED SIGNAL";
    clearMessages();
    addMessage(
        "SYSTEM",
        "Warning: channel 00 is not registered",
        "warning"
    );
    delayedMessage(
        "SYSTEM",
        "No station id found",
        "warning",
        1200
    );
    delayedMessage(
        "SYSTEM",
        "No unit id found",
        "warning",
        2500
    );
    delayedMessage(
        "UNKNOWN",
        "You shouldn't have opened this.",
        "ghost",
        4200
    );
    delayedMessage(
        "UNKNOWN",
        "I remember the last operator.",
        "ghost",
        7200
    );
    delayedMessage(
        "UNKNOWN",
        "He listened to every channel.",
        "ghost",
        10200
    );
    delayedMessage(
        "UNKNOWN",
        "Station 03.",
        "ghost",
        12600
    );
    delayedMessage(
        "UNKNOWN",
        "Station 06.",
        "ghost",
        14500
    );
    delayedMessage(
        "UNKNOWN",
        "Station 11.",
        "ghost",
        16400
    );
    delayedMessage(
        "UNKNOWN",
        "Station 17.",
        "ghost",
        18400
    );
    delayedMessage(
        "UNKNOWN",
        "He thought the units were answering him.",
        "ghost",
        20700
    );
    delayedMessage(
        "UNKNOWN",
        "They were answering me.",
        "ghost",
        23200
    );
    delayedMessage(
        "UNKNOWN",
        "Say something.",
        "ghost",
        26000
    );
}
document.getElementById("channel01").onclick =
    openChannel01;
document.getElementById("channel02").onclick =
    openChannel02;
document.getElementById("channel03").onclick =
    openChannel03;
document.getElementById("channel04").onclick =
    openChannel04;
document.getElementById("channel05").onclick =
    openChannel05;
document.getElementById("channel06").onclick =
    openChannel06;
document.getElementById("channel07").onclick =
    openChannel07;
document.getElementById("channel08").onclick =
    openChannel08;
document.getElementById("channel09").onclick =
    openChannel09;
document.getElementById("channel10").onclick =
    openChannel10;
document.getElementById("channel00").onclick =
    openChannel00;
startButton.onclick = function() {
    introScreen.classList.add("hidden");
    terminalScreen.classList.remove("hidden");
    gameStarted = true;
    secondsPassed = 0;
    openChannel04();
    delayedMessage(
        "SYSTEM",
        "All active stations are online",
        "system",
        10500
    );
    delayedMessage(
        "SYSTEM",
        "Beginning night shift monitoring",
        "system",
        12500
    );
    messageInput.focus();
    startClock();
    startBackgroundMessages();
};
function startClock() {
    setInterval(function() {
        if (!gameStarted) {
            return;
        }
        if (sessionEnding) {
            return;
        }
        secondsPassed =
            secondsPassed + 1;
        var minutes =
            Math.floor(secondsPassed / 60);
        var seconds =
            secondsPassed % 60;
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        clock.innerText =
            "03:" +
            minutes +
            ":" +
            seconds;
    }, 1000);
}
function startBackgroundMessages() {
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "STATION 17",
            "Unit 08, status check.",
            "station"
        );
    }, 18000);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "UNIT 08",
            "North corridor remains clear.",
            "unit"
        );
    }, 20500);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "STATION 06",
            "Unit 04, pressure check.",
            "station"
        );
    }, 25000);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "UNIT 04",
            "Pressure is stable now.",
            "unit"
        );
    }, 27800);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "STATION 11",
            "Unit 21, status.",
            "station"
        );
    }, 33000);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "UNIT 21",
            "Generator two is still offline.",
            "unit"
        );
    }, 35700);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "SYSTEM",
            "Low level radio interference detected",
            "warning"
        );
    }, 42000);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        if (!channel00Found) {
            addMessage(
                "SYSTEM",
                "Unregistered frequency detected",
                "warning"
            );
        }
    }, 45000);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "STATION 14",
            "Unit 07, report.",
            "station"
        );
    }, 50000);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "UNIT 07",
            "East tower secure.",
            "unit"
        );
    }, 52500);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "STATION 18",
            "Unit 44, confirm archive room remains locked.",
            "station"
        );
    }, 59000);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "UNIT 44",
            "Confirmed.",
            "unit"
        );
    }, 61500);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "SYSTEM",
            "All stations: report your status",
            "system"
        );
    }, 69000);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "STATION 03",
            "Station 03 operational.",
            "station"
        );
    }, 71500);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "STATION 06",
            "Station 06 operational.",
            "station"
        );
    }, 73500);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "STATION 11",
            "Station 11 operational.",
            "station"
        );
    }, 75500);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "STATION 17",
            "Station 17 operational.",
            "station"
        );
    }, 77500);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "SYSTEM",
            "Unregistered signal still present",
            "warning"
        );
    }, 82000);
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        if (!channel00Found) {
            addMessage(
                "SYSTEM",
                "Channel 00 is active",
                "warning"
            );
        }
    }, 85000);
}
sendButton.onclick = sendMessage;
messageInput.onkeydown = function(event) {
    if (event.key == "Enter") {
        sendMessage();
    }
};
function sendMessage() {
    if (sessionEnding) {
        return;
    }
    var text =
        messageInput.value.trim();
    if (text == "") {
        return;
    }
    addMessage(
        "OPERATOR",
        text,
        "operator"
    );
    messageInput.value = "";
    if (currentChannel == "00") {
        answerChannel00();
        return;
    }
    if (currentChannel == "01") {
        delayedMessage(
            "STATION 03",
            "Station 03 received your transmission.",
            "station",
            1400
        );
        delayedMessage(
            "UNIT 12",
            "Unit 12 confirms.",
            "unit",
            3400
        );
    }
    if (currentChannel == "02") {
        delayedMessage(
            "STATION 06",
            "Station 06 received your transmission.",
            "station",
            1500
        );
        delayedMessage(
            "UNIT 04",
            "Unit 04 is standing by.",
            "unit",
            3600
        );
    }
    if (currentChannel == "03") {
        delayedMessage(
            "STATION 11",
            "Station 11 received your transmission.",
            "station",
            1300
        );
        delayedMessage(
            "UNIT 21",
            "Unit 21 confirms.",
            "unit",
            3300
        );
    }
    if (currentChannel == "04") {
        delayedMessage(
            "STATION 17",
            "Station 17 received your transmission.",
            "station",
            1400
        );
        delayedMessage(
            "UNIT 08",
            "Unit 08 confirms. Continuing inspection.",
            "unit",
            3700
        );
    }
    if (currentChannel == "05") {
        delayedMessage(
            "STATION 22",
            "Station 22 received your transmission.",
            "station",
            1200
        );
        delayedMessage(
            "UNIT 31",
            "Unit 31 confirms.",
            "unit",
            3400
        );
    }
    if (currentChannel == "06") {
        delayedMessage(
            "STATION 09",
            "Station 09 received your transmission.",
            "station",
            1500
        );
        delayedMessage(
            "UNIT 16",
            "Unit 16 confirms.",
            "unit",
            3800
        );
    }
    if (currentChannel == "07") {
        delayedMessage(
            "STATION 14",
            "Station 14 received your transmission.",
            "station",
            1300
        );
        delayedMessage(
            "UNIT 07",
            "Unit 07 confirms.",
            "unit",
            3600
        );
    }
    if (currentChannel == "08") {
        delayedMessage(
            "STATION 25",
            "Station 25 received your transmission.",
            "station",
            1400
        );
        delayedMessage(
            "UNIT 19",
            "Unit 19 confirms.",
            "unit",
            3500
        );
    }
    if (currentChannel == "09") {
        delayedMessage(
            "STATION 31",
            "Station 31 received your transmission.",
            "station",
            1300
        );
        delayedMessage(
            "UNIT 02",
            "Unit 02 confirms.",
            "unit",
            3500
        );
    }
    if (currentChannel == "10") {
        delayedMessage(
            "STATION 18",
            "Station 18 received your transmission.",
            "station",
            1500
        );
        delayedMessage(
            "UNIT 44",
            "Unit 44 confirms.",
            "unit",
            3800
        );
    }
}
function answerChannel00() {
    delayedMessage(
        "UNKNOWN",
        "You answered.",
        "ghost",
        1800
    );
    delayedMessage(
        "UNKNOWN",
        "The other stations cannot hear us.",
        "ghost",
        4300
    );
    delayedMessage(
        "UNKNOWN",
        "But I can hear everything.",
        "ghost",
        7200
    );
    delayedMessage(
        "UNKNOWN",
        "I heard you before you pressed the button.",
        "ghost",
        9800
    );
    delayedMessage(
        "UNKNOWN",
        "You are not the first operator.",
        "ghost",
        12600
    );
    delayedMessage(
        "UNKNOWN",
        "You are just the next one.",
        "ghost",
        15400
    );
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        beginCorruption();
    }, 18500);
}
function addMessage(sender, text, type) {
    var message =
        document.createElement("div");
    var senderPart =
        document.createElement("span");
    var textPart =
        document.createElement("span");
    message.className =
        "message " + type;
    senderPart.className =
        "sender";
    senderPart.innerText =
        "[" + sender + "] ";

    textPart.className =
        "text";
    textPart.innerText =
        text;
    message.appendChild(senderPart);
    message.appendChild(textPart);
    messageArea.appendChild(message);
    messageArea.scrollTop =
        messageArea.scrollHeight;
}
function clearMessages() {
    messageArea.innerHTML = "";
}
function setActiveChannel(channelNumber) {
    var buttons =
        document.getElementsByClassName("channelButton");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    document
        .getElementById("channel" + channelNumber)
        .classList.add("active");

}
recordButton.onclick = function() {
    if (sessionEnding) {
        return;
    }
    addMessage(
        "SYSTEM",
        "Recording started",
        "system"
    );
    setTimeout(function() {
        if (sessionEnding) {
            return;
        }
        addMessage(
            "SYSTEM",
            "Recording saved to local session log",
            "system"
        );
    }, 1800);
};
muteButton.onclick = function() {
    if (sessionEnding) {
        return;
    }
    muted = !muted;
    if (muted) {
        muteButton.innerText =
            "UNMUTE";
        addMessage(
            "SYSTEM",
            "Audio output muted",
            "system"
        );
    } else {
        muteButton.innerText =
            "MUTE";
        addMessage(
            "SYSTEM",
            "Audio output restored",
            "system"
        );
    }
};
terminateButton.onclick = function() {
    if (sessionEnding) {
        return;
    }
    sessionEnding = true;
    systemStatus.innerText =
        "SYSTEM STATUS: TERMINATING";
    addMessage(
        "SYSTEM",
        "Termination request received",
        "warning"
    );
    setTimeout(function() {
        addMessage(
            "SYSTEM",
            "Closing active channels... 23%",
            "warning"
        );
    }, 1000);
    setTimeout(function() {
        addMessage(
            "SYSTEM",
            "Closing active channels... 58%",
            "warning"
        );
    }, 2200);
    setTimeout(function() {
        addMessage(
            "SYSTEM",
            "Closing active channels... 100%",
            "warning"
        );
    }, 3400);
    setTimeout(function() {
        addMessage(
            "UNKNOWN",
            "You can't hang up.",
            "ghost"
        );
    }, 5000);
    setTimeout(function() {
        beginCorruption();
    }, 7000);
};
function beginCorruption() {
    sessionEnding = true;
    systemStatus.innerText =
        "SYSTEM STATUS: SIGNAL LOST";
    corruptionOverlay.classList.remove(
        "hidden"
    );
    corruptionText.innerText =
        "Signal lost";
    document.body.classList.add(
        "corruptShake"
    );
    setTimeout(function() {
        corruptionText.innerText =
            "Channel 00 is not a channel";
    }, 1300);
    setTimeout(function() {
        corruptionText.innerText =
            "I heard you before you spoke";
    }, 2800);
    setTimeout(function() {
        corruptionText.innerText =
            "You are not the operator";
    }, 4300);
    setTimeout(function() {
        corruptionText.innerText =
            "There are 11 channels";
    }, 5800);
    setTimeout(function() {
        corruptionText.innerText =
            "You were only supposed to see 10";
    }, 7300);
    setTimeout(function() {
        corruptionText.innerText =
            "I know where you are";
    }, 8800);
    setTimeout(function() {
        corruptionText.innerText =
            "I can see the other side of your screen";
    }, 10300);
    setTimeout(function() {
        corruptionText.innerText =
            "Do not close this window";
    }, 11800);
    setTimeout(function() {
        document.body.classList.remove(
            "corruptShake"
        );
        showHackedDeviceScreen();
    }, 14000);
}
function showHackedDeviceScreen() {
    corruptionOverlay.classList.add(
        "hidden"
    );
    terminalScreen.classList.add(
        "hidden"
    );
    introScreen.classList.add(
        "hidden"
    );
    deviceScreen.classList.remove(
        "hidden"
    );
    deviceScreen.classList.add(
        "hackedScreen"
    );
    showDeviceInformation();
    startFakeLeak();
}
function showDeviceInformation() {
    var screenWidth =
        window.screen.width;
    var screenHeight =
        window.screen.height;
    var ratio =
        screenWidth / screenHeight;
    document.getElementById(
        "deviceScreenSize"
    ).innerText =
        screenWidth +
        " x " +
        screenHeight;
    document.getElementById(
        "windowSize"
    ).innerText =
        window.innerWidth +
        " x " +
        window.innerHeight;
    document.getElementById(
        "screenRatio"
    ).innerText =
        ratio.toFixed(2);
    document.getElementById(
        "localTime"
    ).innerText =
        new Date().toLocaleString();
    document.getElementById(
        "timeZone"
    ).innerText =
        Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone;
    document.getElementById(
        "language"
    ).innerText =
        navigator.language;
    document.getElementById(
        "onlineStatus"
    ).innerText =
        navigator.onLine
            ? "YES"
            : "NO";
    document.getElementById(
        "pixelRatio"
    ).innerText =
        window.devicePixelRatio;
    document.getElementById(
        "platform"
    ).innerText =
        navigator.platform;
    getBatteryInformation();
}
function getBatteryInformation() {
    if (!navigator.getBattery) {
        document.getElementById(
            "battery"
        ).innerText =
            "UNAVAILABLE";
        return;
    }
    navigator.getBattery()
        .then(function(battery) {
            var batteryPercent =
                Math.round(
                    battery.level * 100
                );
            if (battery.charging) {
                document.getElementById(
                    "battery"
                ).innerText =
                    batteryPercent +
                    "% // CHARGING";
            } else {
                document.getElementById(
                    "battery"
                ).innerText =
                    batteryPercent +
                    "%";
            }
        })
        .catch(function() {
            document.getElementById(
                "battery"
            ).innerText =
                "UNAVAILABLE";
        });
}
function startFakeLeak() {
    var deviceBox =
        document.querySelector(".deviceBox");
    var leakTitle =
        document.createElement("p");
    leakTitle.className =
        "leakTitle";
    leakTitle.innerText =
        "!!! UNAUTHORIZED ACCESS DETECTED !!!";
    deviceBox.appendChild(
        leakTitle
    );
    var leakBox =
        document.createElement("div");
    leakBox.className =
        "leakBox";
    leakBox.innerHTML =
        "<p>REMOTE SESSION: <span>ACTIVE</span></p>" +
        "<p>TERMINAL OWNER: <span>UNKNOWN</span></p>" +
        "<p>OPERATOR ID: <span>FOUND</span></p>" +
        "<p>MICROPHONE: <span>SCANNING...</span></p>" +
        "<p>CAMERA: <span>SCANNING...</span></p>" +
        "<p>LOCAL FILES: <span>INDEXING...</span></p>" +
        "<p>SESSION MEMORY: <span>COPIED</span></p>" +
        "<p>CHANNEL 00: <span>CONNECTED</span></p>";
    deviceBox.appendChild(
        leakBox
    );
    setTimeout(function() {
        addHorrorLine(
            "I AM STILL HERE."
        );
    }, 3500);
    setTimeout(function() {
        addHorrorLine(
            "YOU SHOULD NOT HAVE LOOKED."
        );
    }, 7000);
    setTimeout(function() {
        addHorrorLine(
            "I AM IN YOUR SYSTEM."
        );
    }, 10500);
    setTimeout(function() {
        cutToBlack();
    }, 14000);
}
function addHorrorLine(text) {
    var deviceBox =
        document.querySelector(".deviceBox");
    var line =
        document.createElement("p");
    line.className =
        "horrorLine";
    line.innerText =
        text;
    deviceBox.appendChild(
        line
    );
    deviceBox.scrollTop =
        deviceBox.scrollHeight;
}
function cutToBlack() {
    deviceScreen.classList.add(
        "hidden"
    );
    document.body.classList.add(
        "finalBlackScreen"
    );
    finalBlackScreen = true;
    showBlackScreenError();
    setInterval(function() {
        if (finalBlackScreen) {
            showBlackScreenError();
        }
    }, 4000);
}
function showBlackScreenError() {
    var errorLine =
        document.createElement("div");
    errorLine.className =
        "finalError";
    var randomNumber =
        Math.floor(
            Math.random() * 9999
        );
    var messages = [
        "ERR_CONNECTION_00",
        "STATION_17://NULL",
        "UNIT_08 NOT FOUND",
        "REMOTE PROCESS ACTIVE",
        "MEMORY READ FAILURE",
        "CHANNEL_00://OPEN",
        "OPERATOR SESSION INVALID",
        "UNKNOWN PROCESS RUNNING",
        "SIGNAL RETURNED",
        "TERMINAL OWNER UNKNOWN",
        "DO NOT RESPOND",
        "PROCESS 00-" + randomNumber,
        "I AM STILL HERE.",
        "LISTENING..."
    ];
    var randomMessage =
        messages[
            Math.floor(
                Math.random() *
                messages.length
            )
        ];
    errorLine.innerText =
        randomMessage;
    document.body.appendChild(
        errorLine
    );
    setTimeout(function() {
        errorLine.remove();
    }, 1200);
}