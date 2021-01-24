import * as $protobuf from "protobufjs";
/** Namespace pj. */
export namespace pj {

    /** Namespace sakuchin. */
    namespace sakuchin {

        /** Namespace percussion. */
        namespace percussion {

            /** Namespace proto. */
            namespace proto {

                /** Prefecture enum. */
                enum Prefecture {
                    UNKNOWN = 0,
                    HOKKAIDO = 1,
                    AOMORI = 2,
                    IWATE = 3,
                    MIYAGI = 4,
                    AKITA = 5,
                    YAMAGATA = 6,
                    FUKUSHIMA = 7,
                    IBARAKI = 8,
                    TOCHIGI = 9,
                    GUNNMA = 10,
                    SAITAMA = 11,
                    CHIBA = 12,
                    TOKYO = 13,
                    KANAGAWA = 14,
                    NIIGATA = 15,
                    TOYAMA = 16,
                    ISHIKAWA = 17,
                    FUKUI = 18,
                    YAMANASHI = 19,
                    NAGANO = 20,
                    GIFU = 21,
                    SHIZUOKA = 22,
                    AICHI = 23,
                    MIE = 24,
                    SHIGA = 25,
                    KYOTO = 26,
                    OSAKA = 27,
                    HYOGO = 28,
                    NARA = 29,
                    WAKAYAMA = 30,
                    TOTTORI = 31,
                    SHIMANE = 32,
                    OKAYAMA = 33,
                    HIROSHIMA = 34,
                    YAMAGUCHI = 35,
                    TOKUSHIMA = 36,
                    KAGAWA = 37,
                    EHIME = 38,
                    KOCHI = 39,
                    FUKUOKA = 40,
                    SAGA = 41,
                    NAGASAKI = 42,
                    KUMAMOTO = 43,
                    OITA = 44,
                    MIYAZAKI = 45,
                    KAGOSHIMA = 46,
                    OKINAWA = 47
                }

                /** Properties of a City. */
                interface ICity {

                    /** City id */
                    id?: (string|null);

                    /** City name */
                    name?: (string|null);

                    /** City prefecture */
                    prefecture?: (pj.sakuchin.percussion.proto.Prefecture|null);
                }

                /** Represents a City. */
                class City implements ICity {

                    /**
                     * Constructs a new City.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.ICity);

                    /** City id. */
                    public id: string;

                    /** City name. */
                    public name: string;

                    /** City prefecture. */
                    public prefecture: pj.sakuchin.percussion.proto.Prefecture;

                    /**
                     * Creates a new City instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns City instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.ICity): pj.sakuchin.percussion.proto.City;

                    /**
                     * Encodes the specified City message. Does not implicitly {@link pj.sakuchin.percussion.proto.City.verify|verify} messages.
                     * @param message City message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.ICity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified City message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.City.verify|verify} messages.
                     * @param message City message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.ICity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a City message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns City
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.City;

                    /**
                     * Decodes a City message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns City
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.City;

                    /**
                     * Verifies a City message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a City message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns City
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.City;

                    /**
                     * Creates a plain object from a City message. Also converts values to other types if specified.
                     * @param message City
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.City, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this City to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetAreaCityResponse. */
                interface IGetAreaCityResponse {

                    /** GetAreaCityResponse cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a GetAreaCityResponse. */
                class GetAreaCityResponse implements IGetAreaCityResponse {

                    /**
                     * Constructs a new GetAreaCityResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetAreaCityResponse);

                    /** GetAreaCityResponse cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new GetAreaCityResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAreaCityResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetAreaCityResponse): pj.sakuchin.percussion.proto.GetAreaCityResponse;

                    /**
                     * Encodes the specified GetAreaCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetAreaCityResponse.verify|verify} messages.
                     * @param message GetAreaCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetAreaCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAreaCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetAreaCityResponse.verify|verify} messages.
                     * @param message GetAreaCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetAreaCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAreaCityResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAreaCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetAreaCityResponse;

                    /**
                     * Decodes a GetAreaCityResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAreaCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetAreaCityResponse;

                    /**
                     * Verifies a GetAreaCityResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAreaCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAreaCityResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetAreaCityResponse;

                    /**
                     * Creates a plain object from a GetAreaCityResponse message. Also converts values to other types if specified.
                     * @param message GetAreaCityResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetAreaCityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAreaCityResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EmptyResponse. */
                interface IEmptyResponse {
                }

                /** Represents an EmptyResponse. */
                class EmptyResponse implements IEmptyResponse {

                    /**
                     * Constructs a new EmptyResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IEmptyResponse);

                    /**
                     * Creates a new EmptyResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EmptyResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IEmptyResponse): pj.sakuchin.percussion.proto.EmptyResponse;

                    /**
                     * Encodes the specified EmptyResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.EmptyResponse.verify|verify} messages.
                     * @param message EmptyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IEmptyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EmptyResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.EmptyResponse.verify|verify} messages.
                     * @param message EmptyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IEmptyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EmptyResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EmptyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.EmptyResponse;

                    /**
                     * Decodes an EmptyResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EmptyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.EmptyResponse;

                    /**
                     * Verifies an EmptyResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EmptyResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EmptyResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.EmptyResponse;

                    /**
                     * Creates a plain object from an EmptyResponse message. Also converts values to other types if specified.
                     * @param message EmptyResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.EmptyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EmptyResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PercussionApiError. */
                interface IPercussionApiError {

                    /** PercussionApiError errorCode */
                    errorCode?: (pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode|null);

                    /** PercussionApiError message */
                    message?: (string|null);
                }

                /** Represents a PercussionApiError. */
                class PercussionApiError implements IPercussionApiError {

                    /**
                     * Constructs a new PercussionApiError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPercussionApiError);

                    /** PercussionApiError errorCode. */
                    public errorCode: pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode;

                    /** PercussionApiError message. */
                    public message: string;

                    /**
                     * Creates a new PercussionApiError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PercussionApiError instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPercussionApiError): pj.sakuchin.percussion.proto.PercussionApiError;

                    /**
                     * Encodes the specified PercussionApiError message. Does not implicitly {@link pj.sakuchin.percussion.proto.PercussionApiError.verify|verify} messages.
                     * @param message PercussionApiError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPercussionApiError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PercussionApiError message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PercussionApiError.verify|verify} messages.
                     * @param message PercussionApiError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPercussionApiError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PercussionApiError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PercussionApiError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PercussionApiError;

                    /**
                     * Decodes a PercussionApiError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PercussionApiError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PercussionApiError;

                    /**
                     * Verifies a PercussionApiError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PercussionApiError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PercussionApiError
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PercussionApiError;

                    /**
                     * Creates a plain object from a PercussionApiError message. Also converts values to other types if specified.
                     * @param message PercussionApiError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PercussionApiError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PercussionApiError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PercussionApiError {

                    /** ErrorCode enum. */
                    enum ErrorCode {
                        UNKNOWN = 0,
                        NO_TOKEN = 1,
                        INVALID_FIREBASE_TOKEN = 2,
                        USER_HAS_BEEN_ALREADY_REGISTERED = 3,
                        DB_ERROR = 4,
                        INVALID_PARAMETER = 5,
                        AUTHENTICATION_ERROR = 6,
                        LOGIN_REQUIRED = 7
                    }
                }

                /** Properties of an EditHistory. */
                interface IEditHistory {

                    /** EditHistory timeStamp */
                    timeStamp?: (number|Long|null);

                    /** EditHistory playerId */
                    playerId?: (string|null);
                }

                /** Represents an EditHistory. */
                class EditHistory implements IEditHistory {

                    /**
                     * Constructs a new EditHistory.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IEditHistory);

                    /** EditHistory timeStamp. */
                    public timeStamp: (number|Long);

                    /** EditHistory playerId. */
                    public playerId: string;

                    /**
                     * Creates a new EditHistory instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EditHistory instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IEditHistory): pj.sakuchin.percussion.proto.EditHistory;

                    /**
                     * Encodes the specified EditHistory message. Does not implicitly {@link pj.sakuchin.percussion.proto.EditHistory.verify|verify} messages.
                     * @param message EditHistory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IEditHistory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EditHistory message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.EditHistory.verify|verify} messages.
                     * @param message EditHistory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IEditHistory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EditHistory message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EditHistory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.EditHistory;

                    /**
                     * Decodes an EditHistory message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EditHistory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.EditHistory;

                    /**
                     * Verifies an EditHistory message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EditHistory message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EditHistory
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.EditHistory;

                    /**
                     * Creates a plain object from an EditHistory message. Also converts values to other types if specified.
                     * @param message EditHistory
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.EditHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EditHistory to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Instrument. */
                interface IInstrument {

                    /** Instrument id */
                    id?: (number|null);

                    /** Instrument name */
                    name?: (string|null);

                    /** Instrument authorId */
                    authorId?: (string|null);
                }

                /** Represents an Instrument. */
                class Instrument implements IInstrument {

                    /**
                     * Constructs a new Instrument.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IInstrument);

                    /** Instrument id. */
                    public id: number;

                    /** Instrument name. */
                    public name: string;

                    /** Instrument authorId. */
                    public authorId: string;

                    /**
                     * Creates a new Instrument instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instrument instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IInstrument): pj.sakuchin.percussion.proto.Instrument;

                    /**
                     * Encodes the specified Instrument message. Does not implicitly {@link pj.sakuchin.percussion.proto.Instrument.verify|verify} messages.
                     * @param message Instrument message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IInstrument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instrument message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.Instrument.verify|verify} messages.
                     * @param message Instrument message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IInstrument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instrument message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instrument
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.Instrument;

                    /**
                     * Decodes an Instrument message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instrument
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.Instrument;

                    /**
                     * Verifies an Instrument message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Instrument message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Instrument
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.Instrument;

                    /**
                     * Creates a plain object from an Instrument message. Also converts values to other types if specified.
                     * @param message Instrument
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.Instrument, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Instrument to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostInstrumentRequest. */
                interface IPostInstrumentRequest {

                    /** PostInstrumentRequest name */
                    name?: (string|null);
                }

                /** Represents a PostInstrumentRequest. */
                class PostInstrumentRequest implements IPostInstrumentRequest {

                    /**
                     * Constructs a new PostInstrumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostInstrumentRequest);

                    /** PostInstrumentRequest name. */
                    public name: string;

                    /**
                     * Creates a new PostInstrumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostInstrumentRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostInstrumentRequest): pj.sakuchin.percussion.proto.PostInstrumentRequest;

                    /**
                     * Encodes the specified PostInstrumentRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostInstrumentRequest.verify|verify} messages.
                     * @param message PostInstrumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostInstrumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostInstrumentRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostInstrumentRequest.verify|verify} messages.
                     * @param message PostInstrumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostInstrumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostInstrumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostInstrumentRequest;

                    /**
                     * Decodes a PostInstrumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostInstrumentRequest;

                    /**
                     * Verifies a PostInstrumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostInstrumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostInstrumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostInstrumentRequest;

                    /**
                     * Creates a plain object from a PostInstrumentRequest message. Also converts values to other types if specified.
                     * @param message PostInstrumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostInstrumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostInstrumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetInstrumentByIdResoponse. */
                interface IGetInstrumentByIdResoponse {

                    /** GetInstrumentByIdResoponse instrument */
                    instrument?: (pj.sakuchin.percussion.proto.IInstrument|null);
                }

                /** Represents a GetInstrumentByIdResoponse. */
                class GetInstrumentByIdResoponse implements IGetInstrumentByIdResoponse {

                    /**
                     * Constructs a new GetInstrumentByIdResoponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetInstrumentByIdResoponse);

                    /** GetInstrumentByIdResoponse instrument. */
                    public instrument?: (pj.sakuchin.percussion.proto.IInstrument|null);

                    /**
                     * Creates a new GetInstrumentByIdResoponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstrumentByIdResoponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetInstrumentByIdResoponse): pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse;

                    /**
                     * Encodes the specified GetInstrumentByIdResoponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse.verify|verify} messages.
                     * @param message GetInstrumentByIdResoponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetInstrumentByIdResoponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstrumentByIdResoponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse.verify|verify} messages.
                     * @param message GetInstrumentByIdResoponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetInstrumentByIdResoponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstrumentByIdResoponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstrumentByIdResoponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse;

                    /**
                     * Decodes a GetInstrumentByIdResoponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstrumentByIdResoponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse;

                    /**
                     * Verifies a GetInstrumentByIdResoponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInstrumentByIdResoponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInstrumentByIdResoponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse;

                    /**
                     * Creates a plain object from a GetInstrumentByIdResoponse message. Also converts values to other types if specified.
                     * @param message GetInstrumentByIdResoponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstrumentByIdResoponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PutInstrumentByIdRequest. */
                interface IPutInstrumentByIdRequest {

                    /** PutInstrumentByIdRequest instrument */
                    instrument?: (pj.sakuchin.percussion.proto.IInstrument|null);
                }

                /** Represents a PutInstrumentByIdRequest. */
                class PutInstrumentByIdRequest implements IPutInstrumentByIdRequest {

                    /**
                     * Constructs a new PutInstrumentByIdRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPutInstrumentByIdRequest);

                    /** PutInstrumentByIdRequest instrument. */
                    public instrument?: (pj.sakuchin.percussion.proto.IInstrument|null);

                    /**
                     * Creates a new PutInstrumentByIdRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PutInstrumentByIdRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPutInstrumentByIdRequest): pj.sakuchin.percussion.proto.PutInstrumentByIdRequest;

                    /**
                     * Encodes the specified PutInstrumentByIdRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutInstrumentByIdRequest.verify|verify} messages.
                     * @param message PutInstrumentByIdRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPutInstrumentByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PutInstrumentByIdRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutInstrumentByIdRequest.verify|verify} messages.
                     * @param message PutInstrumentByIdRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPutInstrumentByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PutInstrumentByIdRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PutInstrumentByIdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PutInstrumentByIdRequest;

                    /**
                     * Decodes a PutInstrumentByIdRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PutInstrumentByIdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PutInstrumentByIdRequest;

                    /**
                     * Verifies a PutInstrumentByIdRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PutInstrumentByIdRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PutInstrumentByIdRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PutInstrumentByIdRequest;

                    /**
                     * Creates a plain object from a PutInstrumentByIdRequest message. Also converts values to other types if specified.
                     * @param message PutInstrumentByIdRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PutInstrumentByIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PutInstrumentByIdRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetInstrumentsResponse. */
                interface IGetInstrumentsResponse {

                    /** GetInstrumentsResponse instruments */
                    instruments?: (pj.sakuchin.percussion.proto.IInstrument[]|null);
                }

                /** Represents a GetInstrumentsResponse. */
                class GetInstrumentsResponse implements IGetInstrumentsResponse {

                    /**
                     * Constructs a new GetInstrumentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetInstrumentsResponse);

                    /** GetInstrumentsResponse instruments. */
                    public instruments: pj.sakuchin.percussion.proto.IInstrument[];

                    /**
                     * Creates a new GetInstrumentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstrumentsResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetInstrumentsResponse): pj.sakuchin.percussion.proto.GetInstrumentsResponse;

                    /**
                     * Encodes the specified GetInstrumentsResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentsResponse.verify|verify} messages.
                     * @param message GetInstrumentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetInstrumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstrumentsResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentsResponse.verify|verify} messages.
                     * @param message GetInstrumentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetInstrumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstrumentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstrumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetInstrumentsResponse;

                    /**
                     * Decodes a GetInstrumentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstrumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetInstrumentsResponse;

                    /**
                     * Verifies a GetInstrumentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInstrumentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInstrumentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetInstrumentsResponse;

                    /**
                     * Creates a plain object from a GetInstrumentsResponse message. Also converts values to other types if specified.
                     * @param message GetInstrumentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetInstrumentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstrumentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetInstrumentHistoryEditResponse. */
                interface IGetInstrumentHistoryEditResponse {

                    /** GetInstrumentHistoryEditResponse history */
                    history?: (pj.sakuchin.percussion.proto.IEditHistory[]|null);
                }

                /** Represents a GetInstrumentHistoryEditResponse. */
                class GetInstrumentHistoryEditResponse implements IGetInstrumentHistoryEditResponse {

                    /**
                     * Constructs a new GetInstrumentHistoryEditResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetInstrumentHistoryEditResponse);

                    /** GetInstrumentHistoryEditResponse history. */
                    public history: pj.sakuchin.percussion.proto.IEditHistory[];

                    /**
                     * Creates a new GetInstrumentHistoryEditResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstrumentHistoryEditResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetInstrumentHistoryEditResponse): pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse;

                    /**
                     * Encodes the specified GetInstrumentHistoryEditResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse.verify|verify} messages.
                     * @param message GetInstrumentHistoryEditResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetInstrumentHistoryEditResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstrumentHistoryEditResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse.verify|verify} messages.
                     * @param message GetInstrumentHistoryEditResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetInstrumentHistoryEditResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstrumentHistoryEditResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstrumentHistoryEditResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse;

                    /**
                     * Decodes a GetInstrumentHistoryEditResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstrumentHistoryEditResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse;

                    /**
                     * Verifies a GetInstrumentHistoryEditResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInstrumentHistoryEditResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInstrumentHistoryEditResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse;

                    /**
                     * Creates a plain object from a GetInstrumentHistoryEditResponse message. Also converts values to other types if specified.
                     * @param message GetInstrumentHistoryEditResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstrumentHistoryEditResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostSignupRequest. */
                interface IPostSignupRequest {

                    /** PostSignupRequest token */
                    token?: (string|null);
                }

                /** Represents a PostSignupRequest. */
                class PostSignupRequest implements IPostSignupRequest {

                    /**
                     * Constructs a new PostSignupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostSignupRequest);

                    /** PostSignupRequest token. */
                    public token: string;

                    /**
                     * Creates a new PostSignupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostSignupRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostSignupRequest): pj.sakuchin.percussion.proto.PostSignupRequest;

                    /**
                     * Encodes the specified PostSignupRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostSignupRequest.verify|verify} messages.
                     * @param message PostSignupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostSignupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostSignupRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostSignupRequest.verify|verify} messages.
                     * @param message PostSignupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostSignupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostSignupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostSignupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostSignupRequest;

                    /**
                     * Decodes a PostSignupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostSignupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostSignupRequest;

                    /**
                     * Verifies a PostSignupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostSignupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostSignupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostSignupRequest;

                    /**
                     * Creates a plain object from a PostSignupRequest message. Also converts values to other types if specified.
                     * @param message PostSignupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostSignupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostSignupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostSignupResponse. */
                interface IPostSignupResponse {

                    /** PostSignupResponse player */
                    player?: (pj.sakuchin.percussion.proto.IPlayer|null);
                }

                /** Represents a PostSignupResponse. */
                class PostSignupResponse implements IPostSignupResponse {

                    /**
                     * Constructs a new PostSignupResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostSignupResponse);

                    /** PostSignupResponse player. */
                    public player?: (pj.sakuchin.percussion.proto.IPlayer|null);

                    /**
                     * Creates a new PostSignupResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostSignupResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostSignupResponse): pj.sakuchin.percussion.proto.PostSignupResponse;

                    /**
                     * Encodes the specified PostSignupResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostSignupResponse.verify|verify} messages.
                     * @param message PostSignupResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostSignupResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostSignupResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostSignupResponse.verify|verify} messages.
                     * @param message PostSignupResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostSignupResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostSignupResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostSignupResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostSignupResponse;

                    /**
                     * Decodes a PostSignupResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostSignupResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostSignupResponse;

                    /**
                     * Verifies a PostSignupResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostSignupResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostSignupResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostSignupResponse;

                    /**
                     * Creates a plain object from a PostSignupResponse message. Also converts values to other types if specified.
                     * @param message PostSignupResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostSignupResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostSignupResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostLoginRequest. */
                interface IPostLoginRequest {

                    /** PostLoginRequest token */
                    token?: (string|null);
                }

                /** Represents a PostLoginRequest. */
                class PostLoginRequest implements IPostLoginRequest {

                    /**
                     * Constructs a new PostLoginRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostLoginRequest);

                    /** PostLoginRequest token. */
                    public token: string;

                    /**
                     * Creates a new PostLoginRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostLoginRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostLoginRequest): pj.sakuchin.percussion.proto.PostLoginRequest;

                    /**
                     * Encodes the specified PostLoginRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostLoginRequest.verify|verify} messages.
                     * @param message PostLoginRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostLoginRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostLoginRequest.verify|verify} messages.
                     * @param message PostLoginRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostLoginRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostLoginRequest;

                    /**
                     * Decodes a PostLoginRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostLoginRequest;

                    /**
                     * Verifies a PostLoginRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostLoginRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostLoginRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostLoginRequest;

                    /**
                     * Creates a plain object from a PostLoginRequest message. Also converts values to other types if specified.
                     * @param message PostLoginRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostLoginRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostLoginResponse. */
                interface IPostLoginResponse {

                    /** PostLoginResponse player */
                    player?: (pj.sakuchin.percussion.proto.IPlayer|null);
                }

                /** Represents a PostLoginResponse. */
                class PostLoginResponse implements IPostLoginResponse {

                    /**
                     * Constructs a new PostLoginResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostLoginResponse);

                    /** PostLoginResponse player. */
                    public player?: (pj.sakuchin.percussion.proto.IPlayer|null);

                    /**
                     * Creates a new PostLoginResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostLoginResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostLoginResponse): pj.sakuchin.percussion.proto.PostLoginResponse;

                    /**
                     * Encodes the specified PostLoginResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostLoginResponse.verify|verify} messages.
                     * @param message PostLoginResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostLoginResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostLoginResponse.verify|verify} messages.
                     * @param message PostLoginResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostLoginResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostLoginResponse;

                    /**
                     * Decodes a PostLoginResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostLoginResponse;

                    /**
                     * Verifies a PostLoginResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostLoginResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostLoginResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostLoginResponse;

                    /**
                     * Creates a plain object from a PostLoginResponse message. Also converts values to other types if specified.
                     * @param message PostLoginResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostLoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostLoginResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMyselfDetailResponse. */
                interface IGetMyselfDetailResponse {

                    /** GetMyselfDetailResponse detail */
                    detail?: (pj.sakuchin.percussion.proto.IPlayerDetail|null);
                }

                /** Represents a GetMyselfDetailResponse. */
                class GetMyselfDetailResponse implements IGetMyselfDetailResponse {

                    /**
                     * Constructs a new GetMyselfDetailResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetMyselfDetailResponse);

                    /** GetMyselfDetailResponse detail. */
                    public detail?: (pj.sakuchin.percussion.proto.IPlayerDetail|null);

                    /**
                     * Creates a new GetMyselfDetailResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMyselfDetailResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetMyselfDetailResponse): pj.sakuchin.percussion.proto.GetMyselfDetailResponse;

                    /**
                     * Encodes the specified GetMyselfDetailResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailResponse.verify|verify} messages.
                     * @param message GetMyselfDetailResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetMyselfDetailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMyselfDetailResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailResponse.verify|verify} messages.
                     * @param message GetMyselfDetailResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetMyselfDetailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMyselfDetailResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMyselfDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetMyselfDetailResponse;

                    /**
                     * Decodes a GetMyselfDetailResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMyselfDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetMyselfDetailResponse;

                    /**
                     * Verifies a GetMyselfDetailResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMyselfDetailResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMyselfDetailResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetMyselfDetailResponse;

                    /**
                     * Creates a plain object from a GetMyselfDetailResponse message. Also converts values to other types if specified.
                     * @param message GetMyselfDetailResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetMyselfDetailResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMyselfDetailResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PutMyselfDetailRequest. */
                interface IPutMyselfDetailRequest {

                    /** PutMyselfDetailRequest detail */
                    detail?: (pj.sakuchin.percussion.proto.IPlayerDetail|null);
                }

                /** Represents a PutMyselfDetailRequest. */
                class PutMyselfDetailRequest implements IPutMyselfDetailRequest {

                    /**
                     * Constructs a new PutMyselfDetailRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPutMyselfDetailRequest);

                    /** PutMyselfDetailRequest detail. */
                    public detail?: (pj.sakuchin.percussion.proto.IPlayerDetail|null);

                    /**
                     * Creates a new PutMyselfDetailRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PutMyselfDetailRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPutMyselfDetailRequest): pj.sakuchin.percussion.proto.PutMyselfDetailRequest;

                    /**
                     * Encodes the specified PutMyselfDetailRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailRequest.verify|verify} messages.
                     * @param message PutMyselfDetailRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPutMyselfDetailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PutMyselfDetailRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailRequest.verify|verify} messages.
                     * @param message PutMyselfDetailRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPutMyselfDetailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PutMyselfDetailRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PutMyselfDetailRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PutMyselfDetailRequest;

                    /**
                     * Decodes a PutMyselfDetailRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PutMyselfDetailRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PutMyselfDetailRequest;

                    /**
                     * Verifies a PutMyselfDetailRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PutMyselfDetailRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PutMyselfDetailRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PutMyselfDetailRequest;

                    /**
                     * Creates a plain object from a PutMyselfDetailRequest message. Also converts values to other types if specified.
                     * @param message PutMyselfDetailRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PutMyselfDetailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PutMyselfDetailRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PutMyselfDetailResponse. */
                interface IPutMyselfDetailResponse {

                    /** PutMyselfDetailResponse detail */
                    detail?: (pj.sakuchin.percussion.proto.IPlayerDetail|null);
                }

                /** Represents a PutMyselfDetailResponse. */
                class PutMyselfDetailResponse implements IPutMyselfDetailResponse {

                    /**
                     * Constructs a new PutMyselfDetailResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPutMyselfDetailResponse);

                    /** PutMyselfDetailResponse detail. */
                    public detail?: (pj.sakuchin.percussion.proto.IPlayerDetail|null);

                    /**
                     * Creates a new PutMyselfDetailResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PutMyselfDetailResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPutMyselfDetailResponse): pj.sakuchin.percussion.proto.PutMyselfDetailResponse;

                    /**
                     * Encodes the specified PutMyselfDetailResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailResponse.verify|verify} messages.
                     * @param message PutMyselfDetailResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPutMyselfDetailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PutMyselfDetailResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailResponse.verify|verify} messages.
                     * @param message PutMyselfDetailResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPutMyselfDetailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PutMyselfDetailResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PutMyselfDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PutMyselfDetailResponse;

                    /**
                     * Decodes a PutMyselfDetailResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PutMyselfDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PutMyselfDetailResponse;

                    /**
                     * Verifies a PutMyselfDetailResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PutMyselfDetailResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PutMyselfDetailResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PutMyselfDetailResponse;

                    /**
                     * Creates a plain object from a PutMyselfDetailResponse message. Also converts values to other types if specified.
                     * @param message PutMyselfDetailResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PutMyselfDetailResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PutMyselfDetailResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMyselfDetailAreaResponse. */
                interface IGetMyselfDetailAreaResponse {

                    /** GetMyselfDetailAreaResponse cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a GetMyselfDetailAreaResponse. */
                class GetMyselfDetailAreaResponse implements IGetMyselfDetailAreaResponse {

                    /**
                     * Constructs a new GetMyselfDetailAreaResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetMyselfDetailAreaResponse);

                    /** GetMyselfDetailAreaResponse cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new GetMyselfDetailAreaResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMyselfDetailAreaResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetMyselfDetailAreaResponse): pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse;

                    /**
                     * Encodes the specified GetMyselfDetailAreaResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse.verify|verify} messages.
                     * @param message GetMyselfDetailAreaResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetMyselfDetailAreaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMyselfDetailAreaResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse.verify|verify} messages.
                     * @param message GetMyselfDetailAreaResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetMyselfDetailAreaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMyselfDetailAreaResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse;

                    /**
                     * Decodes a GetMyselfDetailAreaResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse;

                    /**
                     * Verifies a GetMyselfDetailAreaResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMyselfDetailAreaResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMyselfDetailAreaResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse;

                    /**
                     * Creates a plain object from a GetMyselfDetailAreaResponse message. Also converts values to other types if specified.
                     * @param message GetMyselfDetailAreaResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMyselfDetailAreaResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostMyselfDetailAreaRequest. */
                interface IPostMyselfDetailAreaRequest {

                    /** PostMyselfDetailAreaRequest cityId */
                    cityId?: (string|null);
                }

                /** Represents a PostMyselfDetailAreaRequest. */
                class PostMyselfDetailAreaRequest implements IPostMyselfDetailAreaRequest {

                    /**
                     * Constructs a new PostMyselfDetailAreaRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostMyselfDetailAreaRequest);

                    /** PostMyselfDetailAreaRequest cityId. */
                    public cityId: string;

                    /**
                     * Creates a new PostMyselfDetailAreaRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostMyselfDetailAreaRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostMyselfDetailAreaRequest): pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest;

                    /**
                     * Encodes the specified PostMyselfDetailAreaRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest.verify|verify} messages.
                     * @param message PostMyselfDetailAreaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostMyselfDetailAreaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostMyselfDetailAreaRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest.verify|verify} messages.
                     * @param message PostMyselfDetailAreaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostMyselfDetailAreaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostMyselfDetailAreaRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest;

                    /**
                     * Decodes a PostMyselfDetailAreaRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest;

                    /**
                     * Verifies a PostMyselfDetailAreaRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostMyselfDetailAreaRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostMyselfDetailAreaRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest;

                    /**
                     * Creates a plain object from a PostMyselfDetailAreaRequest message. Also converts values to other types if specified.
                     * @param message PostMyselfDetailAreaRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostMyselfDetailAreaRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostMyselfDetailAreaResponse. */
                interface IPostMyselfDetailAreaResponse {

                    /** PostMyselfDetailAreaResponse cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a PostMyselfDetailAreaResponse. */
                class PostMyselfDetailAreaResponse implements IPostMyselfDetailAreaResponse {

                    /**
                     * Constructs a new PostMyselfDetailAreaResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostMyselfDetailAreaResponse);

                    /** PostMyselfDetailAreaResponse cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new PostMyselfDetailAreaResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostMyselfDetailAreaResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostMyselfDetailAreaResponse): pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse;

                    /**
                     * Encodes the specified PostMyselfDetailAreaResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse.verify|verify} messages.
                     * @param message PostMyselfDetailAreaResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostMyselfDetailAreaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostMyselfDetailAreaResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse.verify|verify} messages.
                     * @param message PostMyselfDetailAreaResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostMyselfDetailAreaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostMyselfDetailAreaResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse;

                    /**
                     * Decodes a PostMyselfDetailAreaResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse;

                    /**
                     * Verifies a PostMyselfDetailAreaResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostMyselfDetailAreaResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostMyselfDetailAreaResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse;

                    /**
                     * Creates a plain object from a PostMyselfDetailAreaResponse message. Also converts values to other types if specified.
                     * @param message PostMyselfDetailAreaResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostMyselfDetailAreaResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteMyselfDetailAreaRequest. */
                interface IDeleteMyselfDetailAreaRequest {

                    /** DeleteMyselfDetailAreaRequest cityId */
                    cityId?: (string|null);
                }

                /** Represents a DeleteMyselfDetailAreaRequest. */
                class DeleteMyselfDetailAreaRequest implements IDeleteMyselfDetailAreaRequest {

                    /**
                     * Constructs a new DeleteMyselfDetailAreaRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaRequest);

                    /** DeleteMyselfDetailAreaRequest cityId. */
                    public cityId: string;

                    /**
                     * Creates a new DeleteMyselfDetailAreaRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMyselfDetailAreaRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaRequest): pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest;

                    /**
                     * Encodes the specified DeleteMyselfDetailAreaRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest.verify|verify} messages.
                     * @param message DeleteMyselfDetailAreaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMyselfDetailAreaRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest.verify|verify} messages.
                     * @param message DeleteMyselfDetailAreaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMyselfDetailAreaRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest;

                    /**
                     * Decodes a DeleteMyselfDetailAreaRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest;

                    /**
                     * Verifies a DeleteMyselfDetailAreaRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMyselfDetailAreaRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMyselfDetailAreaRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest;

                    /**
                     * Creates a plain object from a DeleteMyselfDetailAreaRequest message. Also converts values to other types if specified.
                     * @param message DeleteMyselfDetailAreaRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMyselfDetailAreaRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteMyselfDetailAreaResponse. */
                interface IDeleteMyselfDetailAreaResponse {

                    /** DeleteMyselfDetailAreaResponse cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a DeleteMyselfDetailAreaResponse. */
                class DeleteMyselfDetailAreaResponse implements IDeleteMyselfDetailAreaResponse {

                    /**
                     * Constructs a new DeleteMyselfDetailAreaResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaResponse);

                    /** DeleteMyselfDetailAreaResponse cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new DeleteMyselfDetailAreaResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMyselfDetailAreaResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaResponse): pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse;

                    /**
                     * Encodes the specified DeleteMyselfDetailAreaResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse.verify|verify} messages.
                     * @param message DeleteMyselfDetailAreaResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMyselfDetailAreaResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse.verify|verify} messages.
                     * @param message DeleteMyselfDetailAreaResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMyselfDetailAreaResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse;

                    /**
                     * Decodes a DeleteMyselfDetailAreaResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse;

                    /**
                     * Verifies a DeleteMyselfDetailAreaResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMyselfDetailAreaResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMyselfDetailAreaResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse;

                    /**
                     * Creates a plain object from a DeleteMyselfDetailAreaResponse message. Also converts values to other types if specified.
                     * @param message DeleteMyselfDetailAreaResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMyselfDetailAreaResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PutMyselfDetailAreaRequest. */
                interface IPutMyselfDetailAreaRequest {

                    /** PutMyselfDetailAreaRequest area */
                    area?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a PutMyselfDetailAreaRequest. */
                class PutMyselfDetailAreaRequest implements IPutMyselfDetailAreaRequest {

                    /**
                     * Constructs a new PutMyselfDetailAreaRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPutMyselfDetailAreaRequest);

                    /** PutMyselfDetailAreaRequest area. */
                    public area: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new PutMyselfDetailAreaRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PutMyselfDetailAreaRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPutMyselfDetailAreaRequest): pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest;

                    /**
                     * Encodes the specified PutMyselfDetailAreaRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest.verify|verify} messages.
                     * @param message PutMyselfDetailAreaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPutMyselfDetailAreaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PutMyselfDetailAreaRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest.verify|verify} messages.
                     * @param message PutMyselfDetailAreaRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPutMyselfDetailAreaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PutMyselfDetailAreaRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PutMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest;

                    /**
                     * Decodes a PutMyselfDetailAreaRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PutMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest;

                    /**
                     * Verifies a PutMyselfDetailAreaRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PutMyselfDetailAreaRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PutMyselfDetailAreaRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest;

                    /**
                     * Creates a plain object from a PutMyselfDetailAreaRequest message. Also converts values to other types if specified.
                     * @param message PutMyselfDetailAreaRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PutMyselfDetailAreaRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PutMyselfDetailAreaResponse. */
                interface IPutMyselfDetailAreaResponse {

                    /** PutMyselfDetailAreaResponse cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a PutMyselfDetailAreaResponse. */
                class PutMyselfDetailAreaResponse implements IPutMyselfDetailAreaResponse {

                    /**
                     * Constructs a new PutMyselfDetailAreaResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPutMyselfDetailAreaResponse);

                    /** PutMyselfDetailAreaResponse cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new PutMyselfDetailAreaResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PutMyselfDetailAreaResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPutMyselfDetailAreaResponse): pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse;

                    /**
                     * Encodes the specified PutMyselfDetailAreaResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse.verify|verify} messages.
                     * @param message PutMyselfDetailAreaResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPutMyselfDetailAreaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PutMyselfDetailAreaResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse.verify|verify} messages.
                     * @param message PutMyselfDetailAreaResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPutMyselfDetailAreaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PutMyselfDetailAreaResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PutMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse;

                    /**
                     * Decodes a PutMyselfDetailAreaResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PutMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse;

                    /**
                     * Verifies a PutMyselfDetailAreaResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PutMyselfDetailAreaResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PutMyselfDetailAreaResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse;

                    /**
                     * Creates a plain object from a PutMyselfDetailAreaResponse message. Also converts values to other types if specified.
                     * @param message PutMyselfDetailAreaResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PutMyselfDetailAreaResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMyselDetailInstrumentResponse. */
                interface IGetMyselDetailInstrumentResponse {

                    /** GetMyselDetailInstrumentResponse instruments */
                    instruments?: (pj.sakuchin.percussion.proto.IInstrument[]|null);
                }

                /** Represents a GetMyselDetailInstrumentResponse. */
                class GetMyselDetailInstrumentResponse implements IGetMyselDetailInstrumentResponse {

                    /**
                     * Constructs a new GetMyselDetailInstrumentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetMyselDetailInstrumentResponse);

                    /** GetMyselDetailInstrumentResponse instruments. */
                    public instruments: pj.sakuchin.percussion.proto.IInstrument[];

                    /**
                     * Creates a new GetMyselDetailInstrumentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMyselDetailInstrumentResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetMyselDetailInstrumentResponse): pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse;

                    /**
                     * Encodes the specified GetMyselDetailInstrumentResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse.verify|verify} messages.
                     * @param message GetMyselDetailInstrumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetMyselDetailInstrumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMyselDetailInstrumentResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse.verify|verify} messages.
                     * @param message GetMyselDetailInstrumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetMyselDetailInstrumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMyselDetailInstrumentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse;

                    /**
                     * Decodes a GetMyselDetailInstrumentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse;

                    /**
                     * Verifies a GetMyselDetailInstrumentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMyselDetailInstrumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMyselDetailInstrumentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse;

                    /**
                     * Creates a plain object from a GetMyselDetailInstrumentResponse message. Also converts values to other types if specified.
                     * @param message GetMyselDetailInstrumentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMyselDetailInstrumentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostMyselDetailInstrumentRequest. */
                interface IPostMyselDetailInstrumentRequest {

                    /** PostMyselDetailInstrumentRequest instrumentId */
                    instrumentId?: (number|null);
                }

                /** Represents a PostMyselDetailInstrumentRequest. */
                class PostMyselDetailInstrumentRequest implements IPostMyselDetailInstrumentRequest {

                    /**
                     * Constructs a new PostMyselDetailInstrumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentRequest);

                    /** PostMyselDetailInstrumentRequest instrumentId. */
                    public instrumentId: number;

                    /**
                     * Creates a new PostMyselDetailInstrumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostMyselDetailInstrumentRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentRequest): pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest;

                    /**
                     * Encodes the specified PostMyselDetailInstrumentRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest.verify|verify} messages.
                     * @param message PostMyselDetailInstrumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostMyselDetailInstrumentRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest.verify|verify} messages.
                     * @param message PostMyselDetailInstrumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostMyselDetailInstrumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostMyselDetailInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest;

                    /**
                     * Decodes a PostMyselDetailInstrumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostMyselDetailInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest;

                    /**
                     * Verifies a PostMyselDetailInstrumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostMyselDetailInstrumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostMyselDetailInstrumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest;

                    /**
                     * Creates a plain object from a PostMyselDetailInstrumentRequest message. Also converts values to other types if specified.
                     * @param message PostMyselDetailInstrumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostMyselDetailInstrumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostMyselDetailInstrumentResponse. */
                interface IPostMyselDetailInstrumentResponse {

                    /** PostMyselDetailInstrumentResponse instruments */
                    instruments?: (pj.sakuchin.percussion.proto.IInstrument[]|null);
                }

                /** Represents a PostMyselDetailInstrumentResponse. */
                class PostMyselDetailInstrumentResponse implements IPostMyselDetailInstrumentResponse {

                    /**
                     * Constructs a new PostMyselDetailInstrumentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentResponse);

                    /** PostMyselDetailInstrumentResponse instruments. */
                    public instruments: pj.sakuchin.percussion.proto.IInstrument[];

                    /**
                     * Creates a new PostMyselDetailInstrumentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostMyselDetailInstrumentResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentResponse): pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse;

                    /**
                     * Encodes the specified PostMyselDetailInstrumentResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse.verify|verify} messages.
                     * @param message PostMyselDetailInstrumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostMyselDetailInstrumentResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse.verify|verify} messages.
                     * @param message PostMyselDetailInstrumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostMyselDetailInstrumentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse;

                    /**
                     * Decodes a PostMyselDetailInstrumentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse;

                    /**
                     * Verifies a PostMyselDetailInstrumentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostMyselDetailInstrumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostMyselDetailInstrumentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse;

                    /**
                     * Creates a plain object from a PostMyselDetailInstrumentResponse message. Also converts values to other types if specified.
                     * @param message PostMyselDetailInstrumentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostMyselDetailInstrumentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteMyselDetailInstrumentRequest. */
                interface IDeleteMyselDetailInstrumentRequest {

                    /** DeleteMyselDetailInstrumentRequest instrumentId */
                    instrumentId?: (number|null);
                }

                /** Represents a DeleteMyselDetailInstrumentRequest. */
                class DeleteMyselDetailInstrumentRequest implements IDeleteMyselDetailInstrumentRequest {

                    /**
                     * Constructs a new DeleteMyselDetailInstrumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentRequest);

                    /** DeleteMyselDetailInstrumentRequest instrumentId. */
                    public instrumentId: number;

                    /**
                     * Creates a new DeleteMyselDetailInstrumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMyselDetailInstrumentRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentRequest): pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest;

                    /**
                     * Encodes the specified DeleteMyselDetailInstrumentRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest.verify|verify} messages.
                     * @param message DeleteMyselDetailInstrumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMyselDetailInstrumentRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest.verify|verify} messages.
                     * @param message DeleteMyselDetailInstrumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMyselDetailInstrumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMyselDetailInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest;

                    /**
                     * Decodes a DeleteMyselDetailInstrumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMyselDetailInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest;

                    /**
                     * Verifies a DeleteMyselDetailInstrumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMyselDetailInstrumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMyselDetailInstrumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest;

                    /**
                     * Creates a plain object from a DeleteMyselDetailInstrumentRequest message. Also converts values to other types if specified.
                     * @param message DeleteMyselDetailInstrumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMyselDetailInstrumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteMyselDetailInstrumentResponse. */
                interface IDeleteMyselDetailInstrumentResponse {

                    /** DeleteMyselDetailInstrumentResponse instruments */
                    instruments?: (pj.sakuchin.percussion.proto.IInstrument[]|null);
                }

                /** Represents a DeleteMyselDetailInstrumentResponse. */
                class DeleteMyselDetailInstrumentResponse implements IDeleteMyselDetailInstrumentResponse {

                    /**
                     * Constructs a new DeleteMyselDetailInstrumentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentResponse);

                    /** DeleteMyselDetailInstrumentResponse instruments. */
                    public instruments: pj.sakuchin.percussion.proto.IInstrument[];

                    /**
                     * Creates a new DeleteMyselDetailInstrumentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMyselDetailInstrumentResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentResponse): pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse;

                    /**
                     * Encodes the specified DeleteMyselDetailInstrumentResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse.verify|verify} messages.
                     * @param message DeleteMyselDetailInstrumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMyselDetailInstrumentResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse.verify|verify} messages.
                     * @param message DeleteMyselDetailInstrumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMyselDetailInstrumentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse;

                    /**
                     * Decodes a DeleteMyselDetailInstrumentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse;

                    /**
                     * Verifies a DeleteMyselDetailInstrumentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMyselDetailInstrumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMyselDetailInstrumentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse;

                    /**
                     * Creates a plain object from a DeleteMyselDetailInstrumentResponse message. Also converts values to other types if specified.
                     * @param message DeleteMyselDetailInstrumentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMyselDetailInstrumentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMyselfDetailStudioResponse. */
                interface IGetMyselfDetailStudioResponse {

                    /** GetMyselfDetailStudioResponse studios */
                    studios?: (pj.sakuchin.percussion.proto.IStudio[]|null);
                }

                /** Represents a GetMyselfDetailStudioResponse. */
                class GetMyselfDetailStudioResponse implements IGetMyselfDetailStudioResponse {

                    /**
                     * Constructs a new GetMyselfDetailStudioResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetMyselfDetailStudioResponse);

                    /** GetMyselfDetailStudioResponse studios. */
                    public studios: pj.sakuchin.percussion.proto.IStudio[];

                    /**
                     * Creates a new GetMyselfDetailStudioResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMyselfDetailStudioResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetMyselfDetailStudioResponse): pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse;

                    /**
                     * Encodes the specified GetMyselfDetailStudioResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse.verify|verify} messages.
                     * @param message GetMyselfDetailStudioResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetMyselfDetailStudioResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMyselfDetailStudioResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse.verify|verify} messages.
                     * @param message GetMyselfDetailStudioResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetMyselfDetailStudioResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMyselfDetailStudioResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMyselfDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse;

                    /**
                     * Decodes a GetMyselfDetailStudioResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMyselfDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse;

                    /**
                     * Verifies a GetMyselfDetailStudioResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMyselfDetailStudioResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMyselfDetailStudioResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse;

                    /**
                     * Creates a plain object from a GetMyselfDetailStudioResponse message. Also converts values to other types if specified.
                     * @param message GetMyselfDetailStudioResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMyselfDetailStudioResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostMyselDetailStudioRequest. */
                interface IPostMyselDetailStudioRequest {

                    /** PostMyselDetailStudioRequest studioId */
                    studioId?: (number|null);
                }

                /** Represents a PostMyselDetailStudioRequest. */
                class PostMyselDetailStudioRequest implements IPostMyselDetailStudioRequest {

                    /**
                     * Constructs a new PostMyselDetailStudioRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostMyselDetailStudioRequest);

                    /** PostMyselDetailStudioRequest studioId. */
                    public studioId: number;

                    /**
                     * Creates a new PostMyselDetailStudioRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostMyselDetailStudioRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostMyselDetailStudioRequest): pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest;

                    /**
                     * Encodes the specified PostMyselDetailStudioRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest.verify|verify} messages.
                     * @param message PostMyselDetailStudioRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostMyselDetailStudioRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostMyselDetailStudioRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest.verify|verify} messages.
                     * @param message PostMyselDetailStudioRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostMyselDetailStudioRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostMyselDetailStudioRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostMyselDetailStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest;

                    /**
                     * Decodes a PostMyselDetailStudioRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostMyselDetailStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest;

                    /**
                     * Verifies a PostMyselDetailStudioRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostMyselDetailStudioRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostMyselDetailStudioRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest;

                    /**
                     * Creates a plain object from a PostMyselDetailStudioRequest message. Also converts values to other types if specified.
                     * @param message PostMyselDetailStudioRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostMyselDetailStudioRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostMyselDetailStudioResponse. */
                interface IPostMyselDetailStudioResponse {

                    /** PostMyselDetailStudioResponse studios */
                    studios?: (pj.sakuchin.percussion.proto.IStudio[]|null);
                }

                /** Represents a PostMyselDetailStudioResponse. */
                class PostMyselDetailStudioResponse implements IPostMyselDetailStudioResponse {

                    /**
                     * Constructs a new PostMyselDetailStudioResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostMyselDetailStudioResponse);

                    /** PostMyselDetailStudioResponse studios. */
                    public studios: pj.sakuchin.percussion.proto.IStudio[];

                    /**
                     * Creates a new PostMyselDetailStudioResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostMyselDetailStudioResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostMyselDetailStudioResponse): pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse;

                    /**
                     * Encodes the specified PostMyselDetailStudioResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse.verify|verify} messages.
                     * @param message PostMyselDetailStudioResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostMyselDetailStudioResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostMyselDetailStudioResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse.verify|verify} messages.
                     * @param message PostMyselDetailStudioResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostMyselDetailStudioResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostMyselDetailStudioResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostMyselDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse;

                    /**
                     * Decodes a PostMyselDetailStudioResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostMyselDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse;

                    /**
                     * Verifies a PostMyselDetailStudioResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostMyselDetailStudioResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostMyselDetailStudioResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse;

                    /**
                     * Creates a plain object from a PostMyselDetailStudioResponse message. Also converts values to other types if specified.
                     * @param message PostMyselDetailStudioResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostMyselDetailStudioResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteMyselfDetailStudioRequest. */
                interface IDeleteMyselfDetailStudioRequest {

                    /** DeleteMyselfDetailStudioRequest studioId */
                    studioId?: (number|null);
                }

                /** Represents a DeleteMyselfDetailStudioRequest. */
                class DeleteMyselfDetailStudioRequest implements IDeleteMyselfDetailStudioRequest {

                    /**
                     * Constructs a new DeleteMyselfDetailStudioRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IDeleteMyselfDetailStudioRequest);

                    /** DeleteMyselfDetailStudioRequest studioId. */
                    public studioId: number;

                    /**
                     * Creates a new DeleteMyselfDetailStudioRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMyselfDetailStudioRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IDeleteMyselfDetailStudioRequest): pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest;

                    /**
                     * Encodes the specified DeleteMyselfDetailStudioRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest.verify|verify} messages.
                     * @param message DeleteMyselfDetailStudioRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IDeleteMyselfDetailStudioRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMyselfDetailStudioRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest.verify|verify} messages.
                     * @param message DeleteMyselfDetailStudioRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IDeleteMyselfDetailStudioRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMyselfDetailStudioRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMyselfDetailStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest;

                    /**
                     * Decodes a DeleteMyselfDetailStudioRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMyselfDetailStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest;

                    /**
                     * Verifies a DeleteMyselfDetailStudioRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMyselfDetailStudioRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMyselfDetailStudioRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest;

                    /**
                     * Creates a plain object from a DeleteMyselfDetailStudioRequest message. Also converts values to other types if specified.
                     * @param message DeleteMyselfDetailStudioRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMyselfDetailStudioRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteMyselDetailStudioResponse. */
                interface IDeleteMyselDetailStudioResponse {

                    /** DeleteMyselDetailStudioResponse studios */
                    studios?: (pj.sakuchin.percussion.proto.IStudio[]|null);
                }

                /** Represents a DeleteMyselDetailStudioResponse. */
                class DeleteMyselDetailStudioResponse implements IDeleteMyselDetailStudioResponse {

                    /**
                     * Constructs a new DeleteMyselDetailStudioResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IDeleteMyselDetailStudioResponse);

                    /** DeleteMyselDetailStudioResponse studios. */
                    public studios: pj.sakuchin.percussion.proto.IStudio[];

                    /**
                     * Creates a new DeleteMyselDetailStudioResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMyselDetailStudioResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IDeleteMyselDetailStudioResponse): pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse;

                    /**
                     * Encodes the specified DeleteMyselDetailStudioResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse.verify|verify} messages.
                     * @param message DeleteMyselDetailStudioResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IDeleteMyselDetailStudioResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMyselDetailStudioResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse.verify|verify} messages.
                     * @param message DeleteMyselDetailStudioResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IDeleteMyselDetailStudioResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMyselDetailStudioResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMyselDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse;

                    /**
                     * Decodes a DeleteMyselDetailStudioResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMyselDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse;

                    /**
                     * Verifies a DeleteMyselDetailStudioResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMyselDetailStudioResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMyselDetailStudioResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse;

                    /**
                     * Creates a plain object from a DeleteMyselDetailStudioResponse message. Also converts values to other types if specified.
                     * @param message DeleteMyselDetailStudioResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMyselDetailStudioResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMyselfDetailFollowersResponse. */
                interface IGetMyselfDetailFollowersResponse {

                    /** GetMyselfDetailFollowersResponse players */
                    players?: (pj.sakuchin.percussion.proto.IPlayer[]|null);
                }

                /** Represents a GetMyselfDetailFollowersResponse. */
                class GetMyselfDetailFollowersResponse implements IGetMyselfDetailFollowersResponse {

                    /**
                     * Constructs a new GetMyselfDetailFollowersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetMyselfDetailFollowersResponse);

                    /** GetMyselfDetailFollowersResponse players. */
                    public players: pj.sakuchin.percussion.proto.IPlayer[];

                    /**
                     * Creates a new GetMyselfDetailFollowersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMyselfDetailFollowersResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetMyselfDetailFollowersResponse): pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse;

                    /**
                     * Encodes the specified GetMyselfDetailFollowersResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse.verify|verify} messages.
                     * @param message GetMyselfDetailFollowersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetMyselfDetailFollowersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMyselfDetailFollowersResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse.verify|verify} messages.
                     * @param message GetMyselfDetailFollowersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetMyselfDetailFollowersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMyselfDetailFollowersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMyselfDetailFollowersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse;

                    /**
                     * Decodes a GetMyselfDetailFollowersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMyselfDetailFollowersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse;

                    /**
                     * Verifies a GetMyselfDetailFollowersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMyselfDetailFollowersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMyselfDetailFollowersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse;

                    /**
                     * Creates a plain object from a GetMyselfDetailFollowersResponse message. Also converts values to other types if specified.
                     * @param message GetMyselfDetailFollowersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMyselfDetailFollowersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMyselfDetailFolloweesResponse. */
                interface IGetMyselfDetailFolloweesResponse {

                    /** GetMyselfDetailFolloweesResponse players */
                    players?: (pj.sakuchin.percussion.proto.IPlayer[]|null);
                }

                /** Represents a GetMyselfDetailFolloweesResponse. */
                class GetMyselfDetailFolloweesResponse implements IGetMyselfDetailFolloweesResponse {

                    /**
                     * Constructs a new GetMyselfDetailFolloweesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetMyselfDetailFolloweesResponse);

                    /** GetMyselfDetailFolloweesResponse players. */
                    public players: pj.sakuchin.percussion.proto.IPlayer[];

                    /**
                     * Creates a new GetMyselfDetailFolloweesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMyselfDetailFolloweesResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetMyselfDetailFolloweesResponse): pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse;

                    /**
                     * Encodes the specified GetMyselfDetailFolloweesResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @param message GetMyselfDetailFolloweesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetMyselfDetailFolloweesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMyselfDetailFolloweesResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @param message GetMyselfDetailFolloweesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetMyselfDetailFolloweesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMyselfDetailFolloweesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse;

                    /**
                     * Decodes a GetMyselfDetailFolloweesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse;

                    /**
                     * Verifies a GetMyselfDetailFolloweesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMyselfDetailFolloweesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMyselfDetailFolloweesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse;

                    /**
                     * Creates a plain object from a GetMyselfDetailFolloweesResponse message. Also converts values to other types if specified.
                     * @param message GetMyselfDetailFolloweesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMyselfDetailFolloweesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostMyselfDetailFolloweeRequest. */
                interface IPostMyselfDetailFolloweeRequest {

                    /** PostMyselfDetailFolloweeRequest playerId */
                    playerId?: (string|null);
                }

                /** Represents a PostMyselfDetailFolloweeRequest. */
                class PostMyselfDetailFolloweeRequest implements IPostMyselfDetailFolloweeRequest {

                    /**
                     * Constructs a new PostMyselfDetailFolloweeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweeRequest);

                    /** PostMyselfDetailFolloweeRequest playerId. */
                    public playerId: string;

                    /**
                     * Creates a new PostMyselfDetailFolloweeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostMyselfDetailFolloweeRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweeRequest): pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest;

                    /**
                     * Encodes the specified PostMyselfDetailFolloweeRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest.verify|verify} messages.
                     * @param message PostMyselfDetailFolloweeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostMyselfDetailFolloweeRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest.verify|verify} messages.
                     * @param message PostMyselfDetailFolloweeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostMyselfDetailFolloweeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostMyselfDetailFolloweeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest;

                    /**
                     * Decodes a PostMyselfDetailFolloweeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostMyselfDetailFolloweeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest;

                    /**
                     * Verifies a PostMyselfDetailFolloweeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostMyselfDetailFolloweeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostMyselfDetailFolloweeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest;

                    /**
                     * Creates a plain object from a PostMyselfDetailFolloweeRequest message. Also converts values to other types if specified.
                     * @param message PostMyselfDetailFolloweeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostMyselfDetailFolloweeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostMyselfDetailFolloweesResponse. */
                interface IPostMyselfDetailFolloweesResponse {

                    /** PostMyselfDetailFolloweesResponse players */
                    players?: (pj.sakuchin.percussion.proto.IPlayer[]|null);
                }

                /** Represents a PostMyselfDetailFolloweesResponse. */
                class PostMyselfDetailFolloweesResponse implements IPostMyselfDetailFolloweesResponse {

                    /**
                     * Constructs a new PostMyselfDetailFolloweesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweesResponse);

                    /** PostMyselfDetailFolloweesResponse players. */
                    public players: pj.sakuchin.percussion.proto.IPlayer[];

                    /**
                     * Creates a new PostMyselfDetailFolloweesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostMyselfDetailFolloweesResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweesResponse): pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse;

                    /**
                     * Encodes the specified PostMyselfDetailFolloweesResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @param message PostMyselfDetailFolloweesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostMyselfDetailFolloweesResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @param message PostMyselfDetailFolloweesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostMyselfDetailFolloweesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse;

                    /**
                     * Decodes a PostMyselfDetailFolloweesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse;

                    /**
                     * Verifies a PostMyselfDetailFolloweesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostMyselfDetailFolloweesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostMyselfDetailFolloweesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse;

                    /**
                     * Creates a plain object from a PostMyselfDetailFolloweesResponse message. Also converts values to other types if specified.
                     * @param message PostMyselfDetailFolloweesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostMyselfDetailFolloweesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteMyselfDetailFolloweeRequest. */
                interface IDeleteMyselfDetailFolloweeRequest {

                    /** DeleteMyselfDetailFolloweeRequest playerId */
                    playerId?: (string|null);
                }

                /** Represents a DeleteMyselfDetailFolloweeRequest. */
                class DeleteMyselfDetailFolloweeRequest implements IDeleteMyselfDetailFolloweeRequest {

                    /**
                     * Constructs a new DeleteMyselfDetailFolloweeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweeRequest);

                    /** DeleteMyselfDetailFolloweeRequest playerId. */
                    public playerId: string;

                    /**
                     * Creates a new DeleteMyselfDetailFolloweeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMyselfDetailFolloweeRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweeRequest): pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest;

                    /**
                     * Encodes the specified DeleteMyselfDetailFolloweeRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest.verify|verify} messages.
                     * @param message DeleteMyselfDetailFolloweeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMyselfDetailFolloweeRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest.verify|verify} messages.
                     * @param message DeleteMyselfDetailFolloweeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMyselfDetailFolloweeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMyselfDetailFolloweeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest;

                    /**
                     * Decodes a DeleteMyselfDetailFolloweeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMyselfDetailFolloweeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest;

                    /**
                     * Verifies a DeleteMyselfDetailFolloweeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMyselfDetailFolloweeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMyselfDetailFolloweeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest;

                    /**
                     * Creates a plain object from a DeleteMyselfDetailFolloweeRequest message. Also converts values to other types if specified.
                     * @param message DeleteMyselfDetailFolloweeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMyselfDetailFolloweeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteMyselfDetailFolloweesResponse. */
                interface IDeleteMyselfDetailFolloweesResponse {

                    /** DeleteMyselfDetailFolloweesResponse players */
                    players?: (pj.sakuchin.percussion.proto.IPlayer[]|null);
                }

                /** Represents a DeleteMyselfDetailFolloweesResponse. */
                class DeleteMyselfDetailFolloweesResponse implements IDeleteMyselfDetailFolloweesResponse {

                    /**
                     * Constructs a new DeleteMyselfDetailFolloweesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweesResponse);

                    /** DeleteMyselfDetailFolloweesResponse players. */
                    public players: pj.sakuchin.percussion.proto.IPlayer[];

                    /**
                     * Creates a new DeleteMyselfDetailFolloweesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMyselfDetailFolloweesResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweesResponse): pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse;

                    /**
                     * Encodes the specified DeleteMyselfDetailFolloweesResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @param message DeleteMyselfDetailFolloweesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMyselfDetailFolloweesResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @param message DeleteMyselfDetailFolloweesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMyselfDetailFolloweesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse;

                    /**
                     * Decodes a DeleteMyselfDetailFolloweesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse;

                    /**
                     * Verifies a DeleteMyselfDetailFolloweesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMyselfDetailFolloweesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMyselfDetailFolloweesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse;

                    /**
                     * Creates a plain object from a DeleteMyselfDetailFolloweesResponse message. Also converts values to other types if specified.
                     * @param message DeleteMyselfDetailFolloweesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMyselfDetailFolloweesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Player. */
                interface IPlayer {

                    /** Player id */
                    id?: (string|null);

                    /** Player name */
                    name?: (string|null);

                    /** Player icon */
                    icon?: (string|null);
                }

                /** Represents a Player. */
                class Player implements IPlayer {

                    /**
                     * Constructs a new Player.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPlayer);

                    /** Player id. */
                    public id: string;

                    /** Player name. */
                    public name: string;

                    /** Player icon. */
                    public icon: string;

                    /**
                     * Creates a new Player instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Player instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPlayer): pj.sakuchin.percussion.proto.Player;

                    /**
                     * Encodes the specified Player message. Does not implicitly {@link pj.sakuchin.percussion.proto.Player.verify|verify} messages.
                     * @param message Player message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Player message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.Player.verify|verify} messages.
                     * @param message Player message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Player message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Player
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.Player;

                    /**
                     * Decodes a Player message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Player
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.Player;

                    /**
                     * Verifies a Player message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Player message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Player
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.Player;

                    /**
                     * Creates a plain object from a Player message. Also converts values to other types if specified.
                     * @param message Player
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Player to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PlayerDetail. */
                interface IPlayerDetail {

                    /** PlayerDetail id */
                    id?: (string|null);

                    /** PlayerDetail name */
                    name?: (string|null);

                    /** PlayerDetail icon */
                    icon?: (string|null);

                    /** PlayerDetail introduction */
                    introduction?: (string|null);

                    /** PlayerDetail activeAreas */
                    activeAreas?: (pj.sakuchin.percussion.proto.ICity[]|null);

                    /** PlayerDetail instruments */
                    instruments?: (pj.sakuchin.percussion.proto.IInstrument[]|null);

                    /** PlayerDetail followers */
                    followers?: (pj.sakuchin.percussion.proto.IUser[]|null);

                    /** PlayerDetail followees */
                    followees?: (pj.sakuchin.percussion.proto.IUser[]|null);
                }

                /** Represents a PlayerDetail. */
                class PlayerDetail implements IPlayerDetail {

                    /**
                     * Constructs a new PlayerDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPlayerDetail);

                    /** PlayerDetail id. */
                    public id: string;

                    /** PlayerDetail name. */
                    public name: string;

                    /** PlayerDetail icon. */
                    public icon: string;

                    /** PlayerDetail introduction. */
                    public introduction: string;

                    /** PlayerDetail activeAreas. */
                    public activeAreas: pj.sakuchin.percussion.proto.ICity[];

                    /** PlayerDetail instruments. */
                    public instruments: pj.sakuchin.percussion.proto.IInstrument[];

                    /** PlayerDetail followers. */
                    public followers: pj.sakuchin.percussion.proto.IUser[];

                    /** PlayerDetail followees. */
                    public followees: pj.sakuchin.percussion.proto.IUser[];

                    /**
                     * Creates a new PlayerDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PlayerDetail instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPlayerDetail): pj.sakuchin.percussion.proto.PlayerDetail;

                    /**
                     * Encodes the specified PlayerDetail message. Does not implicitly {@link pj.sakuchin.percussion.proto.PlayerDetail.verify|verify} messages.
                     * @param message PlayerDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PlayerDetail message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PlayerDetail.verify|verify} messages.
                     * @param message PlayerDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PlayerDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PlayerDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PlayerDetail;

                    /**
                     * Decodes a PlayerDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PlayerDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PlayerDetail;

                    /**
                     * Verifies a PlayerDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PlayerDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PlayerDetail
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PlayerDetail;

                    /**
                     * Creates a plain object from a PlayerDetail message. Also converts values to other types if specified.
                     * @param message PlayerDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PlayerDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PlayerDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetPlayerResponse. */
                interface IGetPlayerResponse {

                    /** GetPlayerResponse players */
                    players?: (pj.sakuchin.percussion.proto.IPlayer[]|null);
                }

                /** Represents a GetPlayerResponse. */
                class GetPlayerResponse implements IGetPlayerResponse {

                    /**
                     * Constructs a new GetPlayerResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetPlayerResponse);

                    /** GetPlayerResponse players. */
                    public players: pj.sakuchin.percussion.proto.IPlayer[];

                    /**
                     * Creates a new GetPlayerResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPlayerResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetPlayerResponse): pj.sakuchin.percussion.proto.GetPlayerResponse;

                    /**
                     * Encodes the specified GetPlayerResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerResponse.verify|verify} messages.
                     * @param message GetPlayerResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPlayerResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerResponse.verify|verify} messages.
                     * @param message GetPlayerResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPlayerResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPlayerResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetPlayerResponse;

                    /**
                     * Decodes a GetPlayerResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPlayerResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetPlayerResponse;

                    /**
                     * Verifies a GetPlayerResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPlayerResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPlayerResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetPlayerResponse;

                    /**
                     * Creates a plain object from a GetPlayerResponse message. Also converts values to other types if specified.
                     * @param message GetPlayerResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetPlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPlayerResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetPlayerDetailResponse. */
                interface IGetPlayerDetailResponse {

                    /** GetPlayerDetailResponse detail */
                    detail?: (pj.sakuchin.percussion.proto.IPlayerDetail|null);
                }

                /** Represents a GetPlayerDetailResponse. */
                class GetPlayerDetailResponse implements IGetPlayerDetailResponse {

                    /**
                     * Constructs a new GetPlayerDetailResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetPlayerDetailResponse);

                    /** GetPlayerDetailResponse detail. */
                    public detail?: (pj.sakuchin.percussion.proto.IPlayerDetail|null);

                    /**
                     * Creates a new GetPlayerDetailResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPlayerDetailResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetPlayerDetailResponse): pj.sakuchin.percussion.proto.GetPlayerDetailResponse;

                    /**
                     * Encodes the specified GetPlayerDetailResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailResponse.verify|verify} messages.
                     * @param message GetPlayerDetailResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetPlayerDetailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPlayerDetailResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailResponse.verify|verify} messages.
                     * @param message GetPlayerDetailResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetPlayerDetailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPlayerDetailResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPlayerDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetPlayerDetailResponse;

                    /**
                     * Decodes a GetPlayerDetailResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPlayerDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetPlayerDetailResponse;

                    /**
                     * Verifies a GetPlayerDetailResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPlayerDetailResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPlayerDetailResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetPlayerDetailResponse;

                    /**
                     * Creates a plain object from a GetPlayerDetailResponse message. Also converts values to other types if specified.
                     * @param message GetPlayerDetailResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetPlayerDetailResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPlayerDetailResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetPlayerDetailAreaResponse. */
                interface IGetPlayerDetailAreaResponse {

                    /** GetPlayerDetailAreaResponse activeAreas */
                    activeAreas?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a GetPlayerDetailAreaResponse. */
                class GetPlayerDetailAreaResponse implements IGetPlayerDetailAreaResponse {

                    /**
                     * Constructs a new GetPlayerDetailAreaResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetPlayerDetailAreaResponse);

                    /** GetPlayerDetailAreaResponse activeAreas. */
                    public activeAreas: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new GetPlayerDetailAreaResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPlayerDetailAreaResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetPlayerDetailAreaResponse): pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse;

                    /**
                     * Encodes the specified GetPlayerDetailAreaResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse.verify|verify} messages.
                     * @param message GetPlayerDetailAreaResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetPlayerDetailAreaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPlayerDetailAreaResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse.verify|verify} messages.
                     * @param message GetPlayerDetailAreaResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetPlayerDetailAreaResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPlayerDetailAreaResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPlayerDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse;

                    /**
                     * Decodes a GetPlayerDetailAreaResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPlayerDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse;

                    /**
                     * Verifies a GetPlayerDetailAreaResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPlayerDetailAreaResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPlayerDetailAreaResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse;

                    /**
                     * Creates a plain object from a GetPlayerDetailAreaResponse message. Also converts values to other types if specified.
                     * @param message GetPlayerDetailAreaResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPlayerDetailAreaResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Studio. */
                interface IStudio {

                    /** Studio id */
                    id?: (number|null);

                    /** Studio name */
                    name?: (string|null);

                    /** Studio url */
                    url?: (string|null);

                    /** Studio city */
                    city?: (pj.sakuchin.percussion.proto.ICity|null);

                    /** Studio authorPlayerId */
                    authorPlayerId?: (string|null);
                }

                /** Represents a Studio. */
                class Studio implements IStudio {

                    /**
                     * Constructs a new Studio.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IStudio);

                    /** Studio id. */
                    public id: number;

                    /** Studio name. */
                    public name: string;

                    /** Studio url. */
                    public url: string;

                    /** Studio city. */
                    public city?: (pj.sakuchin.percussion.proto.ICity|null);

                    /** Studio authorPlayerId. */
                    public authorPlayerId: string;

                    /**
                     * Creates a new Studio instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Studio instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IStudio): pj.sakuchin.percussion.proto.Studio;

                    /**
                     * Encodes the specified Studio message. Does not implicitly {@link pj.sakuchin.percussion.proto.Studio.verify|verify} messages.
                     * @param message Studio message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IStudio, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Studio message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.Studio.verify|verify} messages.
                     * @param message Studio message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IStudio, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Studio message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Studio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.Studio;

                    /**
                     * Decodes a Studio message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Studio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.Studio;

                    /**
                     * Verifies a Studio message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Studio message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Studio
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.Studio;

                    /**
                     * Creates a plain object from a Studio message. Also converts values to other types if specified.
                     * @param message Studio
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.Studio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Studio to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetStudioResponse. */
                interface IGetStudioResponse {

                    /** GetStudioResponse studios */
                    studios?: (pj.sakuchin.percussion.proto.IStudio[]|null);
                }

                /** Represents a GetStudioResponse. */
                class GetStudioResponse implements IGetStudioResponse {

                    /**
                     * Constructs a new GetStudioResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetStudioResponse);

                    /** GetStudioResponse studios. */
                    public studios: pj.sakuchin.percussion.proto.IStudio[];

                    /**
                     * Creates a new GetStudioResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetStudioResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetStudioResponse): pj.sakuchin.percussion.proto.GetStudioResponse;

                    /**
                     * Encodes the specified GetStudioResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetStudioResponse.verify|verify} messages.
                     * @param message GetStudioResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetStudioResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetStudioResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetStudioResponse.verify|verify} messages.
                     * @param message GetStudioResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetStudioResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetStudioResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetStudioResponse;

                    /**
                     * Decodes a GetStudioResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetStudioResponse;

                    /**
                     * Verifies a GetStudioResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetStudioResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetStudioResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetStudioResponse;

                    /**
                     * Creates a plain object from a GetStudioResponse message. Also converts values to other types if specified.
                     * @param message GetStudioResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetStudioResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetStudioResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostStudioRequest. */
                interface IPostStudioRequest {

                    /** PostStudioRequest name */
                    name?: (string|null);

                    /** PostStudioRequest url */
                    url?: (string|null);

                    /** PostStudioRequest cityId */
                    cityId?: (string|null);

                    /** PostStudioRequest authorPlayerId */
                    authorPlayerId?: (string|null);
                }

                /** Represents a PostStudioRequest. */
                class PostStudioRequest implements IPostStudioRequest {

                    /**
                     * Constructs a new PostStudioRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostStudioRequest);

                    /** PostStudioRequest name. */
                    public name: string;

                    /** PostStudioRequest url. */
                    public url: string;

                    /** PostStudioRequest cityId. */
                    public cityId: string;

                    /** PostStudioRequest authorPlayerId. */
                    public authorPlayerId: string;

                    /**
                     * Creates a new PostStudioRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostStudioRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostStudioRequest): pj.sakuchin.percussion.proto.PostStudioRequest;

                    /**
                     * Encodes the specified PostStudioRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostStudioRequest.verify|verify} messages.
                     * @param message PostStudioRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostStudioRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostStudioRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostStudioRequest.verify|verify} messages.
                     * @param message PostStudioRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostStudioRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostStudioRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostStudioRequest;

                    /**
                     * Decodes a PostStudioRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostStudioRequest;

                    /**
                     * Verifies a PostStudioRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostStudioRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostStudioRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostStudioRequest;

                    /**
                     * Creates a plain object from a PostStudioRequest message. Also converts values to other types if specified.
                     * @param message PostStudioRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostStudioRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostStudioRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PutStudioRequest. */
                interface IPutStudioRequest {

                    /** PutStudioRequest studio */
                    studio?: (pj.sakuchin.percussion.proto.IStudio|null);
                }

                /** Represents a PutStudioRequest. */
                class PutStudioRequest implements IPutStudioRequest {

                    /**
                     * Constructs a new PutStudioRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPutStudioRequest);

                    /** PutStudioRequest studio. */
                    public studio?: (pj.sakuchin.percussion.proto.IStudio|null);

                    /**
                     * Creates a new PutStudioRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PutStudioRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPutStudioRequest): pj.sakuchin.percussion.proto.PutStudioRequest;

                    /**
                     * Encodes the specified PutStudioRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutStudioRequest.verify|verify} messages.
                     * @param message PutStudioRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPutStudioRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PutStudioRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutStudioRequest.verify|verify} messages.
                     * @param message PutStudioRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPutStudioRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PutStudioRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PutStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PutStudioRequest;

                    /**
                     * Decodes a PutStudioRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PutStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PutStudioRequest;

                    /**
                     * Verifies a PutStudioRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PutStudioRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PutStudioRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PutStudioRequest;

                    /**
                     * Creates a plain object from a PutStudioRequest message. Also converts values to other types if specified.
                     * @param message PutStudioRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PutStudioRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PutStudioRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetStudioHistoryEditResponse. */
                interface IGetStudioHistoryEditResponse {

                    /** GetStudioHistoryEditResponse history */
                    history?: (pj.sakuchin.percussion.proto.IEditHistory[]|null);
                }

                /** Represents a GetStudioHistoryEditResponse. */
                class GetStudioHistoryEditResponse implements IGetStudioHistoryEditResponse {

                    /**
                     * Constructs a new GetStudioHistoryEditResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetStudioHistoryEditResponse);

                    /** GetStudioHistoryEditResponse history. */
                    public history: pj.sakuchin.percussion.proto.IEditHistory[];

                    /**
                     * Creates a new GetStudioHistoryEditResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetStudioHistoryEditResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetStudioHistoryEditResponse): pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse;

                    /**
                     * Encodes the specified GetStudioHistoryEditResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse.verify|verify} messages.
                     * @param message GetStudioHistoryEditResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetStudioHistoryEditResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetStudioHistoryEditResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse.verify|verify} messages.
                     * @param message GetStudioHistoryEditResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetStudioHistoryEditResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetStudioHistoryEditResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetStudioHistoryEditResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse;

                    /**
                     * Decodes a GetStudioHistoryEditResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetStudioHistoryEditResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse;

                    /**
                     * Verifies a GetStudioHistoryEditResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetStudioHistoryEditResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetStudioHistoryEditResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse;

                    /**
                     * Creates a plain object from a GetStudioHistoryEditResponse message. Also converts values to other types if specified.
                     * @param message GetStudioHistoryEditResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetStudioHistoryEditResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetSuggestCityResponse. */
                interface IGetSuggestCityResponse {

                    /** GetSuggestCityResponse cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a GetSuggestCityResponse. */
                class GetSuggestCityResponse implements IGetSuggestCityResponse {

                    /**
                     * Constructs a new GetSuggestCityResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetSuggestCityResponse);

                    /** GetSuggestCityResponse cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new GetSuggestCityResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSuggestCityResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetSuggestCityResponse): pj.sakuchin.percussion.proto.GetSuggestCityResponse;

                    /**
                     * Encodes the specified GetSuggestCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetSuggestCityResponse.verify|verify} messages.
                     * @param message GetSuggestCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetSuggestCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSuggestCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetSuggestCityResponse.verify|verify} messages.
                     * @param message GetSuggestCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetSuggestCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSuggestCityResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSuggestCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetSuggestCityResponse;

                    /**
                     * Decodes a GetSuggestCityResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSuggestCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetSuggestCityResponse;

                    /**
                     * Verifies a GetSuggestCityResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSuggestCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSuggestCityResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetSuggestCityResponse;

                    /**
                     * Creates a plain object from a GetSuggestCityResponse message. Also converts values to other types if specified.
                     * @param message GetSuggestCityResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetSuggestCityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSuggestCityResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a User. */
                interface IUser {

                    /** User id */
                    id?: (string|null);

                    /** User name */
                    name?: (string|null);

                    /** User photo */
                    photo?: (string|null);
                }

                /** Represents a User. */
                class User implements IUser {

                    /**
                     * Constructs a new User.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IUser);

                    /** User id. */
                    public id: string;

                    /** User name. */
                    public name: string;

                    /** User photo. */
                    public photo: string;

                    /**
                     * Creates a new User instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns User instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IUser): pj.sakuchin.percussion.proto.User;

                    /**
                     * Encodes the specified User message. Does not implicitly {@link pj.sakuchin.percussion.proto.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified User message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.User;

                    /**
                     * Decodes a User message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.User;

                    /**
                     * Verifies a User message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a User message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns User
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.User;

                    /**
                     * Creates a plain object from a User message. Also converts values to other types if specified.
                     * @param message User
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this User to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a UserProfile. */
                interface IUserProfile {

                    /** UserProfile activeCities */
                    activeCities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a UserProfile. */
                class UserProfile implements IUserProfile {

                    /**
                     * Constructs a new UserProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IUserProfile);

                    /** UserProfile activeCities. */
                    public activeCities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new UserProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserProfile instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IUserProfile): pj.sakuchin.percussion.proto.UserProfile;

                    /**
                     * Encodes the specified UserProfile message. Does not implicitly {@link pj.sakuchin.percussion.proto.UserProfile.verify|verify} messages.
                     * @param message UserProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IUserProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserProfile message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.UserProfile.verify|verify} messages.
                     * @param message UserProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IUserProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.UserProfile;

                    /**
                     * Decodes a UserProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.UserProfile;

                    /**
                     * Verifies a UserProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserProfile
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.UserProfile;

                    /**
                     * Creates a plain object from a UserProfile message. Also converts values to other types if specified.
                     * @param message UserProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.UserProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SignupUserRequest. */
                interface ISignupUserRequest {

                    /** SignupUserRequest token */
                    token?: (string|null);
                }

                /** Represents a SignupUserRequest. */
                class SignupUserRequest implements ISignupUserRequest {

                    /**
                     * Constructs a new SignupUserRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.ISignupUserRequest);

                    /** SignupUserRequest token. */
                    public token: string;

                    /**
                     * Creates a new SignupUserRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignupUserRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.ISignupUserRequest): pj.sakuchin.percussion.proto.SignupUserRequest;

                    /**
                     * Encodes the specified SignupUserRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserRequest.verify|verify} messages.
                     * @param message SignupUserRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.ISignupUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignupUserRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserRequest.verify|verify} messages.
                     * @param message SignupUserRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.ISignupUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignupUserRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignupUserRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.SignupUserRequest;

                    /**
                     * Decodes a SignupUserRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignupUserRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.SignupUserRequest;

                    /**
                     * Verifies a SignupUserRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignupUserRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignupUserRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.SignupUserRequest;

                    /**
                     * Creates a plain object from a SignupUserRequest message. Also converts values to other types if specified.
                     * @param message SignupUserRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.SignupUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignupUserRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SignupUserResponse. */
                interface ISignupUserResponse {

                    /** SignupUserResponse user */
                    user?: (pj.sakuchin.percussion.proto.IUser|null);
                }

                /** Represents a SignupUserResponse. */
                class SignupUserResponse implements ISignupUserResponse {

                    /**
                     * Constructs a new SignupUserResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.ISignupUserResponse);

                    /** SignupUserResponse user. */
                    public user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /**
                     * Creates a new SignupUserResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignupUserResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.ISignupUserResponse): pj.sakuchin.percussion.proto.SignupUserResponse;

                    /**
                     * Encodes the specified SignupUserResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserResponse.verify|verify} messages.
                     * @param message SignupUserResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.ISignupUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignupUserResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserResponse.verify|verify} messages.
                     * @param message SignupUserResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.ISignupUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignupUserResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignupUserResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.SignupUserResponse;

                    /**
                     * Decodes a SignupUserResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignupUserResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.SignupUserResponse;

                    /**
                     * Verifies a SignupUserResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignupUserResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignupUserResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.SignupUserResponse;

                    /**
                     * Creates a plain object from a SignupUserResponse message. Also converts values to other types if specified.
                     * @param message SignupUserResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.SignupUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignupUserResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostUserLoginRequest. */
                interface IPostUserLoginRequest {

                    /** PostUserLoginRequest token */
                    token?: (string|null);
                }

                /** Represents a PostUserLoginRequest. */
                class PostUserLoginRequest implements IPostUserLoginRequest {

                    /**
                     * Constructs a new PostUserLoginRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostUserLoginRequest);

                    /** PostUserLoginRequest token. */
                    public token: string;

                    /**
                     * Creates a new PostUserLoginRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostUserLoginRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostUserLoginRequest): pj.sakuchin.percussion.proto.PostUserLoginRequest;

                    /**
                     * Encodes the specified PostUserLoginRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginRequest.verify|verify} messages.
                     * @param message PostUserLoginRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostUserLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostUserLoginRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginRequest.verify|verify} messages.
                     * @param message PostUserLoginRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostUserLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostUserLoginRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostUserLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostUserLoginRequest;

                    /**
                     * Decodes a PostUserLoginRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostUserLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostUserLoginRequest;

                    /**
                     * Verifies a PostUserLoginRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostUserLoginRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostUserLoginRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostUserLoginRequest;

                    /**
                     * Creates a plain object from a PostUserLoginRequest message. Also converts values to other types if specified.
                     * @param message PostUserLoginRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostUserLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostUserLoginRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostUserLoginResponse. */
                interface IPostUserLoginResponse {

                    /** PostUserLoginResponse user */
                    user?: (pj.sakuchin.percussion.proto.IUser|null);
                }

                /** Represents a PostUserLoginResponse. */
                class PostUserLoginResponse implements IPostUserLoginResponse {

                    /**
                     * Constructs a new PostUserLoginResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostUserLoginResponse);

                    /** PostUserLoginResponse user. */
                    public user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /**
                     * Creates a new PostUserLoginResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostUserLoginResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostUserLoginResponse): pj.sakuchin.percussion.proto.PostUserLoginResponse;

                    /**
                     * Encodes the specified PostUserLoginResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginResponse.verify|verify} messages.
                     * @param message PostUserLoginResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostUserLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostUserLoginResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginResponse.verify|verify} messages.
                     * @param message PostUserLoginResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostUserLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostUserLoginResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostUserLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostUserLoginResponse;

                    /**
                     * Decodes a PostUserLoginResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostUserLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostUserLoginResponse;

                    /**
                     * Verifies a PostUserLoginResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostUserLoginResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostUserLoginResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostUserLoginResponse;

                    /**
                     * Creates a plain object from a PostUserLoginResponse message. Also converts values to other types if specified.
                     * @param message PostUserLoginResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostUserLoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostUserLoginResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetUserProfileResponse. */
                interface IGetUserProfileResponse {

                    /** GetUserProfileResponse user */
                    user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /** GetUserProfileResponse userProfile */
                    userProfile?: (pj.sakuchin.percussion.proto.IUserProfile|null);
                }

                /** Represents a GetUserProfileResponse. */
                class GetUserProfileResponse implements IGetUserProfileResponse {

                    /**
                     * Constructs a new GetUserProfileResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetUserProfileResponse);

                    /** GetUserProfileResponse user. */
                    public user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /** GetUserProfileResponse userProfile. */
                    public userProfile?: (pj.sakuchin.percussion.proto.IUserProfile|null);

                    /**
                     * Creates a new GetUserProfileResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetUserProfileResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetUserProfileResponse): pj.sakuchin.percussion.proto.GetUserProfileResponse;

                    /**
                     * Encodes the specified GetUserProfileResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserProfileResponse.verify|verify} messages.
                     * @param message GetUserProfileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetUserProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetUserProfileResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserProfileResponse.verify|verify} messages.
                     * @param message GetUserProfileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetUserProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetUserProfileResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetUserProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetUserProfileResponse;

                    /**
                     * Decodes a GetUserProfileResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetUserProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetUserProfileResponse;

                    /**
                     * Verifies a GetUserProfileResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetUserProfileResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetUserProfileResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetUserProfileResponse;

                    /**
                     * Creates a plain object from a GetUserProfileResponse message. Also converts values to other types if specified.
                     * @param message GetUserProfileResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetUserProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetUserProfileResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PutUserProfileRequest. */
                interface IPutUserProfileRequest {

                    /** PutUserProfileRequest user */
                    user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /** PutUserProfileRequest userProfile */
                    userProfile?: (pj.sakuchin.percussion.proto.IUserProfile|null);
                }

                /** Represents a PutUserProfileRequest. */
                class PutUserProfileRequest implements IPutUserProfileRequest {

                    /**
                     * Constructs a new PutUserProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPutUserProfileRequest);

                    /** PutUserProfileRequest user. */
                    public user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /** PutUserProfileRequest userProfile. */
                    public userProfile?: (pj.sakuchin.percussion.proto.IUserProfile|null);

                    /**
                     * Creates a new PutUserProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PutUserProfileRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPutUserProfileRequest): pj.sakuchin.percussion.proto.PutUserProfileRequest;

                    /**
                     * Encodes the specified PutUserProfileRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserProfileRequest.verify|verify} messages.
                     * @param message PutUserProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPutUserProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PutUserProfileRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserProfileRequest.verify|verify} messages.
                     * @param message PutUserProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPutUserProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PutUserProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PutUserProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PutUserProfileRequest;

                    /**
                     * Decodes a PutUserProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PutUserProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PutUserProfileRequest;

                    /**
                     * Verifies a PutUserProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PutUserProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PutUserProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PutUserProfileRequest;

                    /**
                     * Creates a plain object from a PutUserProfileRequest message. Also converts values to other types if specified.
                     * @param message PutUserProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PutUserProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PutUserProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PutUserCityRequest. */
                interface IPutUserCityRequest {

                    /** PutUserCityRequest cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a PutUserCityRequest. */
                class PutUserCityRequest implements IPutUserCityRequest {

                    /**
                     * Constructs a new PutUserCityRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPutUserCityRequest);

                    /** PutUserCityRequest cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new PutUserCityRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PutUserCityRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPutUserCityRequest): pj.sakuchin.percussion.proto.PutUserCityRequest;

                    /**
                     * Encodes the specified PutUserCityRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserCityRequest.verify|verify} messages.
                     * @param message PutUserCityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPutUserCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PutUserCityRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserCityRequest.verify|verify} messages.
                     * @param message PutUserCityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPutUserCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PutUserCityRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PutUserCityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PutUserCityRequest;

                    /**
                     * Decodes a PutUserCityRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PutUserCityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PutUserCityRequest;

                    /**
                     * Verifies a PutUserCityRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PutUserCityRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PutUserCityRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PutUserCityRequest;

                    /**
                     * Creates a plain object from a PutUserCityRequest message. Also converts values to other types if specified.
                     * @param message PutUserCityRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PutUserCityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PutUserCityRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetUserCityResponse. */
                interface IGetUserCityResponse {

                    /** GetUserCityResponse cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a GetUserCityResponse. */
                class GetUserCityResponse implements IGetUserCityResponse {

                    /**
                     * Constructs a new GetUserCityResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetUserCityResponse);

                    /** GetUserCityResponse cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new GetUserCityResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetUserCityResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetUserCityResponse): pj.sakuchin.percussion.proto.GetUserCityResponse;

                    /**
                     * Encodes the specified GetUserCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserCityResponse.verify|verify} messages.
                     * @param message GetUserCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetUserCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetUserCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserCityResponse.verify|verify} messages.
                     * @param message GetUserCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetUserCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetUserCityResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetUserCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetUserCityResponse;

                    /**
                     * Decodes a GetUserCityResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetUserCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetUserCityResponse;

                    /**
                     * Verifies a GetUserCityResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetUserCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetUserCityResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetUserCityResponse;

                    /**
                     * Creates a plain object from a GetUserCityResponse message. Also converts values to other types if specified.
                     * @param message GetUserCityResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetUserCityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetUserCityResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
