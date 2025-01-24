import React, { useState } from "react";
import {Box, Button, Card, CardContent, TextField, Typography, Link} from "@mui/material";
import styled from "@emotion/styled";

const StyledCard = styled(Card)`
    width: 400px;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FullHeightContainer= styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
`;

const Login = () => {
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleGoogleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <FullHeightContainer>
            <StyledCard>
                <CardContent>
                    <Typography variant="h5" align="center" gutterBottom>
                        Test for ME
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <Box sx={{mb: 2}}>
                            <TextField
                                fullWidth
                                label="Email Addrss"
                                type="email"
                                variant="outlined"
                                required
                            />
                        </Box>
                        <Box sx={{mb: 2}}>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                required
                            />
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{borderRadius: 2, mb: 2}}
                        >
                            Log In
                        </Button>
                    </form>
                    <form onSubmit={handleGoogleLogin}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{borderRadius: 2, mb: 2}}
                        >
                            Google Login
                        </Button>
                    </form>
                    <Typography align="center" variant="body2">
                        Don't have an account?{" "}
                        <Link href="#!" color="primary" underline="hover">
                        sign up
                        </Link>
                    </Typography>
                </CardContent>
            </StyledCard>
        </FullHeightContainer>
    );
};



export default Login;


