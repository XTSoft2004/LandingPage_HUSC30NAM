import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Container className="text-center mt-5">
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link href="/" passHref>
                    <Button variant="primary">Go to Home</Button>
                </Link>
            </Container>
        </>
    );
}