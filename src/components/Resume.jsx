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
    return entries.map(entry =>
        <ResumeEntry
            key={entry.header}
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
                header={ResumeEntry.education[0].header}
                subHeader={ResumeEntry.education[0].subHeader}
                dates={ResumeEntry.education[0].dates}
                description={ResumeEntry.education[0].description}
            />
            <SectionTitle> WORK </SectionTitle>
            {resumeEntryBuilder(ResumeEntry.work)}
        </MainContent>
    </ResumeWrapper>
);