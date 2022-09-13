import React from 'react';
import Footer from './components/Footer';
import './App.css';

export function Main({ footer }) {
    return (
        <>
            <Footer footer={footer} />
        </>
    )
}