import * as React from "react";
import Zoom from "@material-ui/core/Zoom";
import SpeedMenu from "../SpeedMenu/SpeedMenu";
import Tooltip from "@material-ui/core/Tooltip";
import ReplayIcon from "@material-ui/icons/Replay";
import IconButton from "@material-ui/core/IconButton";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

export default function AnimationControl(props) {

    const {customTooltip, handleResetClick, stepForward, stepBackward, pause, resume, isPlaying, playDisabled, backwardDisabled, handleClick, handleClose, anchorEl, playSpeed, trace} = props;


    return (
        <div
            style={{
                position: "relative",
                left: "50%",
                transform: "translate(-50%)",
                width: "240px",
            }}
        >
            {/* reset button */}
            <Tooltip
                title='Reset'
                TransitionComponent={Zoom}
                enterDelay={300}
                leaveDelay={200}
                classes={customTooltip }
            >
                <span>
                    <IconButton
                        // pause the animation and reset
                        onClick={handleResetClick}
                        disabled={false}
                    >
                        <ReplayIcon
                            // color may need to follow the theme color
                            style={{ color: "grey" }}
                            fontSize='small'
                        />
                    </IconButton>
                </span>
            </Tooltip>

            {/* previous step button */}
            <IconButton
                onClick={() => {
                    stepBackward();
                }}
                disabled={backwardDisabled}
            >
                <SkipPreviousIcon
                    // color may need to follow the theme color
                    style={{ color: "grey" }}
                    fontSize='small'
                />
            </IconButton>

            {/* play button */}
            <IconButton
                // function using depends on isPlaying
                onClick={() => {
                    isPlaying ? pause() : resume();
                }}
                disabled={playDisabled}
            >
                {/* button appearence depends on isPlaying */}
                {isPlaying ? (
                    <PauseCircleFilledIcon fontSize='large' />
                ) : (
                    <PlayCircleFilledIcon fontSize='large' />
                )}
            </IconButton>

            {/* next step button */}
            <IconButton
                onClick={() => {
                    stepForward();
                }}
                disabled={playDisabled}
            >
                <SkipNextIcon
                    // color may need to follow the theme color
                    style={{ color: "grey" }}
                    fontSize='small'
                />
            </IconButton>

            {/* the speed choosing menu */}
            <SpeedMenu
                handleClick={handleClick}
                handleClose={handleClose}
                anchorEl={anchorEl}
                speed={playSpeed + "x"}
            />
        </div>
    );
}
