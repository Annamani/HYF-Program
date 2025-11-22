function match(candidate, job) {
    if (candidate.minSalary == null) {
        throw new Error("Candidate must have a minSalary");
    }
    if (job.maxSalary == null) {
        throw new Error("Job must have a maxSalary");
    }
    const minSalary = candidate.minSalary;
    const maxSalary = job.maxSalary;
    const effectiveMin = minSalary * 0.90;
    return effectiveMin <= maxSalary;
}
let candidate1 = {
    minSalary: 120000
};
let job1 = {
    maxSalary: 140000
};
console.log(job_matching(candidate1, job1));

let candidate2 = {
    minSalary: 200000
};
let job2 = {
    maxSalary: 180000
};
console.log(job_matching(candidate2, job2));