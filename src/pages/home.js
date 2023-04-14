
import { useState, useEffect } from "react";
import { IKImage, IKVideo, IKContext, IKUpload } from 'imagekitio-react';
import axios from 'axios';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  return (
    <div className="App">
      My Home Page    
      
    </div>
  );
}
