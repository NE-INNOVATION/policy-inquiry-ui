export class PolicyInquiry {
    policyNumber: string;
    coverages: coverages;
    customer:customer;
    drivers:driver[];
    vehicles:vehicle[];
}

export class coverages {
    bi: boolean;
    pd: boolean;
    med: boolean;
    comp: boolean;
    col: boolean;
    premium: string;
}

export class customer {
    firstName: string;
    lastName: string;
    dob: string;
    streetAddress: string;
    apt: string;
    zip: string;
}


export class driver {
    name: string;
    gender: string;
    maritalStatus: string;
    licensedAge: string;
}

export class vehicle {
    year: string;
    make: string;
    model: string;
    vehicleOwned: string;
    vehicleUsage: string;
    daysDriven: string;
    milesDriven: string;
    mehiclePrimaryUse: string;
    annualMileage: string;
}
