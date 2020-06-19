export class PolicyInquiry {
    PolicyNumber: string;
    Coverages: Coverages;
    Customer:Customer;
    Drivers:Driver[];
    Vehicles:Vehicle[];
}

export class Coverages {
    Bi: boolean;
    Pd: boolean;
    Med: boolean;
    Comp: boolean;
    Col: boolean;
    Premium: string;
}

export class Customer {
    FirstName: string;
    LastName: string;
    Dob: string;
    StreetAddress: string;
    Apt: string;
    Zip: string;
}


export class Driver {
    Name: string;
    Gender: string;
    MaritalStatus: string;
    LicensedAge: string;
}

export class Vehicle {
    Year: string;
    Make: string;
    Model: string;
    VehicleOwned: string;
    VehicleUsage: string;
    daysDriven: string;
    milesDriven: string;
    VehiclePrimaryUse: string;
    AnnualMileage: string;
}
