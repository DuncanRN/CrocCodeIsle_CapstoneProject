import React from "react";

export default LevelDeterminer = workOutUserLevelByExperience = (experience) => {

    var level;

    if (experience < 70) {
        level = 1
    }

    else if (70 <= experience && experience < 160) {
        level = 2
    }

    else if (160 <= experience && experience < 270) {
        level = 3
    }

    else if (270 <= experience && experience < 400) {
        level = 4
    }

    else if (400 <= experience && experience < 550) {
        level = 5
    }

    else if (550 <= experience && experience < 720) {
        level = 6
    }

    else if (720 <= experience && experience < 910) {
        level = 7
    }

    else if (910 <= experience && experience < 1120) {
        level = 8
    }

    else if (1120 <= experience && experience  < 1350) {
        level = 9
    }

    else if (1350 <= experience) {
        level = 10
    }

    return level;
}