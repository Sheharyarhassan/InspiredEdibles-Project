"use client";

import React, { useRef } from "react";

const MusicPlayer = ({ audioRef,src }) => {
   return <audio ref={audioRef} src={src} loop />;
};

export default MusicPlayer;
