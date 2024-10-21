export const handleHttpError = (
    res,
    message = "SAlio mal",
    code = 403
) => {
    res.status(code);
    res.send({error:message});
};
