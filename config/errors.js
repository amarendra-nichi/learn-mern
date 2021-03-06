const createError = require("http-errors");
const error = [];
error[401] = "Unauthorized";
error[400] = "BadRequest";
error[402] = "PaymentRequired";
error[403] = "Forbidden";
error[404] = "NotFound";
error[405] = "MethodNotAllowed";
error[406] = "NotAcceptable";
error[407] = "ProxyAuthenticationRequired";
error[408] = "RequestTimeout";
error[409] = "Conflict";
error[410] = "Gone";
error[411] = "LengthRequired";
error[412] = "PreconditionFailed";
error[413] = "PayloadTooLarge";
error[414] = "URITooLong";
error[415] = "UnsupportedMediaType";
error[416] = "RangeNotSatisfiable";
error[417] = "ExpectationFailed";
error[418] = "ImATeapot";
error[421] = "MisdirectedRequest";
error[422] = "UnprocessableEntity";
error[423] = "Locked";
error[424] = "FailedDependency";
error[425] = "UnorderedCollection";
error[426] = "UpgradeRequired";
error[428] = "PreconditionRequired";
error[429] = "TooManyRequests";
error[431] = "RequestHeaderFieldsTooLarge";
error[451] = "UnavailableForLegalReasons";
error[500] = "InternalServerError";
error[501] = "NotImplemented";
error[502] = "BadGateway";
error[503] = "ServiceUnavailable";
error[504] = "GatewayTimeout";
error[505] = "HTTPVersionNotSupported";
error[506] = "VariantAlsoNegotiates";
error[507] = "InsufficientStorage";
error[508] = "LoopDetected";
error[509] = "BandwidthLimitExceeded";
error[510] = "NotExtended";
error[511] = "NetworkAuthenticationRequired";

module.exports = function (code) {
  return createError(code, error[code]);
};
