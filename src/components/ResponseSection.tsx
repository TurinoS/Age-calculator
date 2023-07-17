'use client'

import { AppContext } from "@/context/AppContext";
import StyledSection from "@/styles/Response.style";
import { useContext } from 'react'

export default function ResponseSection() {
    const { livedYears, livedMonths, livedDays, submited } = useContext(AppContext)
    return(
        <StyledSection>
            <h2>{submited ? livedYears : "--"} {livedYears != 1 ? <span>anos</span> : <span>ano</span>}</h2>
            <h2>{submited ? livedMonths : "--"} {livedMonths != 1 ? <span>meses</span> : <span>mês</span>}</h2>
            <h2>{submited ? livedDays : "--"} {livedDays != 1 ? <span>dias</span> : <span>dia</span>}</h2>
        </StyledSection>
    )
}