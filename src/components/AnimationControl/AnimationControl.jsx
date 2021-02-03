import * as React from "react";
import Zoom from "@material-ui/core/Zoom";
import SpeedMenu from "../SpeedMenu/SpeedMenu";
import Tooltip from "@material-ui/core/Tooltip";
import ReplayIcon from "@material-ui/icons/Replay";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

export default function AnimationControl(props) {

    const useStyles = makeStyles({
        customTooltip: {
            fontFamily: "inherit",
            fontSize: "0.5em",
            fontWeight: "700",
            paddingTop: "8px",
            paddingBottom: "10px",
            letterSpacing: "1px",
            marginTop: "3px"
        },
    });

    const classes = useStyles();
    const { handleResetClick, stepForward, stepBackward, pause, resume, isPlaying, playDisabled, backwardDisabled, handleClick, handleClose, anchorEl, playSpeed} = props;


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
                className={classes.customTooltip }
                arrow
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
