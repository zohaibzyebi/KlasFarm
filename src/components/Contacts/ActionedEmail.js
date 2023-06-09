import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Snackbar from "@mui/material/Snackbar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ActionedEmail = ({ email }) => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleClose = () => {
    setOpenTooltip(false);
  };

  const handleOpen = () => {
    setOpenTooltip(true);
  };

  function copyToClipboard() {
    navigator.clipboard.writeText("abc@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);

    handleClick();
  }

  const TooltipContent = () => {
    return (
      <div className="bg-black text-white text-[13px]  flex items-center justify-center gap-1  rounded-[2px] ">
        {/* Copy email button  */}
        <div className="flex items-center justify-center gap-1 cursor-pointer py-[4px] px-[8px] border-solid border-0 border-r-[0.6px] border-white">
          <MailOutlineIcon className="w-[17px] h-[17px]" />
          <p onClick={copyToClipboard}>Copy {email}</p>
        </div>
        <div className="w-[0.7px] bg-white h-full"></div>
        {/* Send email button  */}
        <a href={`mailto:${email}`}>
          <button className="py-[4px]  pr-[8px] bg-none border-none cursor-pointer">
            Send mail{" "}
          </button>
        </a>
      </div>
    );
  };

  const SnackbarContent = () => {
    return (
      <div className="text-white font-medium text-[14px] vsm:text-[15px] px-[16px] rounded py-[5px] vsm:py-[6px] text-center">
        {`"${email}" copied to your clipboard`}
      </div>
    );
  };

  return (
    <div className="action-email">
      <Tooltip
        placement="top"
        leaveDelay={1500}
        open={openTooltip}
        onClose={handleClose}
        onOpen={handleOpen}
        onClick={handleOpen}
        title={<TooltipContent />}
        arrow
      >
        <div
          onClick={handleClick}
          className="text-white text-[16px] xl:text-[18px] cursor-pointer"
        >
          e-mail:
          <span className="px-2 transition-all underline underline-offset-4 decoration-[1px] hover:bg-blue">
            {email}
          </span>
        </div>
      </Tooltip>
      <Snackbar
        className="bg-black text-white text-[13px]  rounded-[3px]"
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={<SnackbarContent />}
        autoHideDuration={2000}
      />
    </div>
  );
};

export default ActionedEmail;
