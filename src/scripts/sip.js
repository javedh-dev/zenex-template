const calculateStepUpSIP = (initialMonthlyContribution, rateOfIntrest, yearsInvested, YearlyIncrease) => {
    let currentCorpus = 0;
    for (let year = 1; year <= yearsInvested; year++) {
        currentCorpus += (1 + (YearlyIncrease / 100) * year) * initialMonthlyContribution * 12;
        currentCorpus = calCulculateYearEndCorpus(currentCorpus, rateOfIntrest);
        console.log(`Corpus at end of Year ${year} : ${currentCorpus}`);
    }
}

const calCulculateYearEndCorpus = (p, r) => {
    return Math.round((1 + r / 100) * p);
}

// calculateStepUpSIP(10000,14,38,5);
calculateStepUpSIP(100000, 12, 33, 5);
