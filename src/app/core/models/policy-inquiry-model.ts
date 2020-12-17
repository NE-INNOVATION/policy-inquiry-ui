export class PolicyInquiry {
    policyNumber: string;
    coverages: coverages;
    customer:customer;
    drivers:driver[];
    vehicles:vehicle[];
}

export class coverages {
    bi: string;
    pd: string;
    med: string;
    comp: string;
    col: string;
    premium: string;
}

export class customer {
    firstName: string;
    lastName: string;
    dob: string;
    stAddress: string;
    apt: string;
    zip: string;
}


export class driver {
    name: string;
    gender: string;
    maritalStatus: string;
    licensedAge: string;
    licenseNum: string;
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

export class PolicyInquiryDt {
    policyNumber: string;
    firstName: string;
    dob: string;
    Covbi: string;
    covcomp: string;
    driverName: string;
    licenseNumber: string;
    vehicleYear: string;
  
    constructor() {
      this.policyNumber = '';
      this.firstName = '';
      this.dob = '';
      this.Covbi = '';
      this.covcomp = '';
      this.driverName = '';
      this.licenseNumber = '';
      this.vehicleYear = '';
    }
  }
