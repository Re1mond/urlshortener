import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RedirectPage = () => {
    const { code } = useParams();
    const [url, setUrl] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const response = await fetch(`http://localhost:7048/api/${code}`);
                if (response.ok) {
                    const data = await response.json();
                    setUrl(data.redirectUrl);
                } else {
                    console.error('Error fetching the URL');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUrl();
    }, [code]);

    useEffect(() => {
        if (url) {
            if (window.opener) {
                window.open(url, '_blank');
                navigate('/');
            } else {
                window.location.href = url;
            }
        }
    }, [url, navigate]);

    return <div>Redirecting...</div>;
};

export default RedirectPage;
