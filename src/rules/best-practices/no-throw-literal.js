// NG
throw 1
throw { error: true }

// OK
throw new Error()
throw new Error('error')