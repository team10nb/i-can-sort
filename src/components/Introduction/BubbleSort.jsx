import React from "react";
import SwitchAnimation from "../SwitchAnimation/SwitchAnimation";

// 3, 12, 7, 5, 10, 8


const trace = [
    [
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#00BFFF", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#FFD700", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 10, height: 100, backgroundColor: "#00BFFF", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#FFD700", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#00BFFF", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#FFD700", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#00BFFF", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#FFD700", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#00BFFF", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#FFD700", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#FFD700", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#00BFFF", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ],[
        {value: 3, height: 30, backgroundColor: "#008000", key: 0, y: 0},
        {value: 5, height: 50, backgroundColor: "#008000", key: 3, y: 0},
        {value: 7, height: 70, backgroundColor: "#008000", key: 2, y: 0},
        {value: 8, height: 80, backgroundColor: "#008000", key: 5, y: 0},
        {value: 10, height: 100, backgroundColor: "#008000", key: 4, y: 0},
        {value: 12, height: 120, backgroundColor: "#008000", key: 1, y: 0}
    ]
]

const description = ["Bubble sort is one algorithm used to sort a sequence of numbers", 
                     "Bars in yellow are comparing",
                     "Compare 3 and 12", 
                     "After comparing them, if the number on the right is smaller, they will be swapped",
                     "3 is smaller than 12, so the numbers don't get swapped",
                     "After the comparison is finished, two yellow comparing seats move one position to the right", 
                     "Now comparing 12 and 7", 
                     "12 is bigger than 7 , so the numbers got swapped", 
                     "Two yellow comparing seats move one position to the right",
                     "This operation is repeated until the two yellow comparing seats reach the right end of the sequence",
                     "Compare 12 and 5", 
                     "12 is bigger than 5 , so the numbers got swapped", 
                     "Compare 12 and 10", 
                     "12 is bigger than 10 , so the numbers got swapped", 
                     "The two yellow comparing seats have reached the right end of the sequence",
                     "Compare 12 and 8", 
                     "12 is bigger than 8 , so the numbers got swapped", 
                     "In one round of operations, the biggest value inthe sequence has moved to the right edge.", 
                     "12 is in the right place",
                     "The number on the right edge is considered fully sorted",
                     "And the two yellow comparing seats are moving back to the left edge",
                     "The same operations are repeated until all of the numbers are fully sorted",
                     "Compare 3 and 7", 
                     "3 is less than 7, so the numbers don't get swapped", 
                     "Compare 7 and 5", 
                     "7 is bigger than 5 , so the numbers got swapped", 
                     "Compare 7 and 10", 
                     "7 is less than 10, so the numbers don't get swapped", 
                     "Compare 10 and 8", 
                     "10 is bigger than 8 , so the numbers got swapped", 
                     "10 is in the right place", 
                     "Compare 3 and 5", 
                     "3 is less than 5, so the numbers don't get swapped", 
                     "Compare 5 and 7", 
                     "5 is less than 7, so the numbers don't get swapped", 
                     "Compare 7 and 8", 
                     "7 is less than 8, so the numbers don't get swapped", 
                     "8 is in the right place", 
                     "Compare 3 and 5", 
                     "3 is less than 5, so the numbers don't get swapped", 
                     "Compare 5 and 7", 
                     "5 is less than 7, so the numbers don't get swapped", 
                     "7 is in the right place", 
                     "Compare 3 and 5", 
                     "3 is less than 5, so the numbers don't get swapped", 
                     "5 is in the right place", 
                     "3 is in the right place", 
                     "Bubble Sort Finished!"]


export default function IntroBubble() {
    const props = { trace: trace, description: description };

    
    return <SwitchAnimation {...props} width={490} explainationBoxHeight={6}/>;

}
