import React from 'react'

function SectionItem({ title, data }) {
    return (
        <section className="statSection">
            <span className="title capitalize">{`${title}: `}</span>
            <span>{data}</span>
        </section>
    );
}

export default SectionItem;