# BUGS FOUND

when logging in with a non admin acocunt, after having been logged in with the admin account.
The last admin panel view is going to be th activeOption in state.

-- Easy fix, on logout set activeOption: "" ;
