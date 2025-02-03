function detectType(value: number | string) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  return value + 10;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("PLease provide ID ");
    return;
  }
  id.toLowerCase();
}

interface AdminData {
  name: string;
  email: string;
  isAdmin: boolean;
}

interface UserData {
  name: string;
  email: string;
}

/// in operator inside type narrowing
function gettIsAdmin(account: UserData | AdminData) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}
