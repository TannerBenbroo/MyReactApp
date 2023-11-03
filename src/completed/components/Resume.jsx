import React from "react";

import { NavBar } from './NavBar';
import { ResumeWrapper, MainContent, HeaderWrapper, Dates, Header, SubHeader, ResumeEntryWrapper, Description, SectionTitle } from './ResumeStyledComponents';

const ResumeEntry = ({
    header = "",
    subHeader = "",
    dates = "",
    description = ""
}) => (
    <ResumeEntryWrapper>
        <HeaderWrapper>
            <Header>{header}</Header>
            <Dates>{dates}</Dates>
        </HeaderWrapper>
        <SubHeader> {subHeader}</SubHeader>
        <Description> {description} </Description>
    </ResumeEntryWrapper>
)

const resumeEntryBuilder = (entries) => {
    entries.map(entry =>
        <ResumeEntry
            header={entry.header}
            subHeader={entry.subHeader}
            dates={entry.dates}
            description={entry.description}
            />
            )
}

export const Resume = () => (
    <ResumeWrapper>
        <MainContent>
            <SectionTitle> Education </SectionTitle>
            <ResumeEntry
                header={ResumeObject.education[0].header}
                subHeader={resumeObject.education[0].subHeader}
                dates={resumeObject.education[0].dates}
                description={resumeObject.education[0].description}
            />
            <SectionTitle> WORK </SectionTitle>
            {resumeEntryBuilder(resumeObject.work)}
        </MainContent>
    </ResumeWrapper>
);