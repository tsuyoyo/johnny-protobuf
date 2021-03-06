/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pj = (function() {

    /**
     * Namespace pj.
     * @exports pj
     * @namespace
     */
    var pj = {};

    pj.sakuchin = (function() {

        /**
         * Namespace sakuchin.
         * @memberof pj
         * @namespace
         */
        var sakuchin = {};

        sakuchin.percussion = (function() {

            /**
             * Namespace percussion.
             * @memberof pj.sakuchin
             * @namespace
             */
            var percussion = {};

            percussion.proto = (function() {

                /**
                 * Namespace proto.
                 * @memberof pj.sakuchin.percussion
                 * @namespace
                 */
                var proto = {};

                /**
                 * Prefecture enum.
                 * @name pj.sakuchin.percussion.proto.Prefecture
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} HOKKAIDO=1 HOKKAIDO value
                 * @property {number} AOMORI=2 AOMORI value
                 * @property {number} IWATE=3 IWATE value
                 * @property {number} MIYAGI=4 MIYAGI value
                 * @property {number} AKITA=5 AKITA value
                 * @property {number} YAMAGATA=6 YAMAGATA value
                 * @property {number} FUKUSHIMA=7 FUKUSHIMA value
                 * @property {number} IBARAKI=8 IBARAKI value
                 * @property {number} TOCHIGI=9 TOCHIGI value
                 * @property {number} GUNNMA=10 GUNNMA value
                 * @property {number} SAITAMA=11 SAITAMA value
                 * @property {number} CHIBA=12 CHIBA value
                 * @property {number} TOKYO=13 TOKYO value
                 * @property {number} KANAGAWA=14 KANAGAWA value
                 * @property {number} NIIGATA=15 NIIGATA value
                 * @property {number} TOYAMA=16 TOYAMA value
                 * @property {number} ISHIKAWA=17 ISHIKAWA value
                 * @property {number} FUKUI=18 FUKUI value
                 * @property {number} YAMANASHI=19 YAMANASHI value
                 * @property {number} NAGANO=20 NAGANO value
                 * @property {number} GIFU=21 GIFU value
                 * @property {number} SHIZUOKA=22 SHIZUOKA value
                 * @property {number} AICHI=23 AICHI value
                 * @property {number} MIE=24 MIE value
                 * @property {number} SHIGA=25 SHIGA value
                 * @property {number} KYOTO=26 KYOTO value
                 * @property {number} OSAKA=27 OSAKA value
                 * @property {number} HYOGO=28 HYOGO value
                 * @property {number} NARA=29 NARA value
                 * @property {number} WAKAYAMA=30 WAKAYAMA value
                 * @property {number} TOTTORI=31 TOTTORI value
                 * @property {number} SHIMANE=32 SHIMANE value
                 * @property {number} OKAYAMA=33 OKAYAMA value
                 * @property {number} HIROSHIMA=34 HIROSHIMA value
                 * @property {number} YAMAGUCHI=35 YAMAGUCHI value
                 * @property {number} TOKUSHIMA=36 TOKUSHIMA value
                 * @property {number} KAGAWA=37 KAGAWA value
                 * @property {number} EHIME=38 EHIME value
                 * @property {number} KOCHI=39 KOCHI value
                 * @property {number} FUKUOKA=40 FUKUOKA value
                 * @property {number} SAGA=41 SAGA value
                 * @property {number} NAGASAKI=42 NAGASAKI value
                 * @property {number} KUMAMOTO=43 KUMAMOTO value
                 * @property {number} OITA=44 OITA value
                 * @property {number} MIYAZAKI=45 MIYAZAKI value
                 * @property {number} KAGOSHIMA=46 KAGOSHIMA value
                 * @property {number} OKINAWA=47 OKINAWA value
                 */
                proto.Prefecture = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "HOKKAIDO"] = 1;
                    values[valuesById[2] = "AOMORI"] = 2;
                    values[valuesById[3] = "IWATE"] = 3;
                    values[valuesById[4] = "MIYAGI"] = 4;
                    values[valuesById[5] = "AKITA"] = 5;
                    values[valuesById[6] = "YAMAGATA"] = 6;
                    values[valuesById[7] = "FUKUSHIMA"] = 7;
                    values[valuesById[8] = "IBARAKI"] = 8;
                    values[valuesById[9] = "TOCHIGI"] = 9;
                    values[valuesById[10] = "GUNNMA"] = 10;
                    values[valuesById[11] = "SAITAMA"] = 11;
                    values[valuesById[12] = "CHIBA"] = 12;
                    values[valuesById[13] = "TOKYO"] = 13;
                    values[valuesById[14] = "KANAGAWA"] = 14;
                    values[valuesById[15] = "NIIGATA"] = 15;
                    values[valuesById[16] = "TOYAMA"] = 16;
                    values[valuesById[17] = "ISHIKAWA"] = 17;
                    values[valuesById[18] = "FUKUI"] = 18;
                    values[valuesById[19] = "YAMANASHI"] = 19;
                    values[valuesById[20] = "NAGANO"] = 20;
                    values[valuesById[21] = "GIFU"] = 21;
                    values[valuesById[22] = "SHIZUOKA"] = 22;
                    values[valuesById[23] = "AICHI"] = 23;
                    values[valuesById[24] = "MIE"] = 24;
                    values[valuesById[25] = "SHIGA"] = 25;
                    values[valuesById[26] = "KYOTO"] = 26;
                    values[valuesById[27] = "OSAKA"] = 27;
                    values[valuesById[28] = "HYOGO"] = 28;
                    values[valuesById[29] = "NARA"] = 29;
                    values[valuesById[30] = "WAKAYAMA"] = 30;
                    values[valuesById[31] = "TOTTORI"] = 31;
                    values[valuesById[32] = "SHIMANE"] = 32;
                    values[valuesById[33] = "OKAYAMA"] = 33;
                    values[valuesById[34] = "HIROSHIMA"] = 34;
                    values[valuesById[35] = "YAMAGUCHI"] = 35;
                    values[valuesById[36] = "TOKUSHIMA"] = 36;
                    values[valuesById[37] = "KAGAWA"] = 37;
                    values[valuesById[38] = "EHIME"] = 38;
                    values[valuesById[39] = "KOCHI"] = 39;
                    values[valuesById[40] = "FUKUOKA"] = 40;
                    values[valuesById[41] = "SAGA"] = 41;
                    values[valuesById[42] = "NAGASAKI"] = 42;
                    values[valuesById[43] = "KUMAMOTO"] = 43;
                    values[valuesById[44] = "OITA"] = 44;
                    values[valuesById[45] = "MIYAZAKI"] = 45;
                    values[valuesById[46] = "KAGOSHIMA"] = 46;
                    values[valuesById[47] = "OKINAWA"] = 47;
                    return values;
                })();

                proto.City = (function() {

                    /**
                     * Properties of a City.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface ICity
                     * @property {string|null} [id] City id
                     * @property {string|null} [name] City name
                     * @property {pj.sakuchin.percussion.proto.Prefecture|null} [prefecture] City prefecture
                     */

                    /**
                     * Constructs a new City.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a City.
                     * @implements ICity
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.ICity=} [properties] Properties to set
                     */
                    function City(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * City id.
                     * @member {string} id
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @instance
                     */
                    City.prototype.id = "";

                    /**
                     * City name.
                     * @member {string} name
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @instance
                     */
                    City.prototype.name = "";

                    /**
                     * City prefecture.
                     * @member {pj.sakuchin.percussion.proto.Prefecture} prefecture
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @instance
                     */
                    City.prototype.prefecture = 0;

                    /**
                     * Creates a new City instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ICity=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.City} City instance
                     */
                    City.create = function create(properties) {
                        return new City(properties);
                    };

                    /**
                     * Encodes the specified City message. Does not implicitly {@link pj.sakuchin.percussion.proto.City.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ICity} message City message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    City.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.prefecture != null && Object.hasOwnProperty.call(message, "prefecture"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.prefecture);
                        return writer;
                    };

                    /**
                     * Encodes the specified City message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.City.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ICity} message City message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    City.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a City message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.City} City
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    City.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.City();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.prefecture = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a City message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.City} City
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    City.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a City message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    City.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.prefecture != null && message.hasOwnProperty("prefecture"))
                            switch (message.prefecture) {
                            default:
                                return "prefecture: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                            case 25:
                            case 26:
                            case 27:
                            case 28:
                            case 29:
                            case 30:
                            case 31:
                            case 32:
                            case 33:
                            case 34:
                            case 35:
                            case 36:
                            case 37:
                            case 38:
                            case 39:
                            case 40:
                            case 41:
                            case 42:
                            case 43:
                            case 44:
                            case 45:
                            case 46:
                            case 47:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a City message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.City} City
                     */
                    City.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.City)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.City();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.name != null)
                            message.name = String(object.name);
                        switch (object.prefecture) {
                        case "UNKNOWN":
                        case 0:
                            message.prefecture = 0;
                            break;
                        case "HOKKAIDO":
                        case 1:
                            message.prefecture = 1;
                            break;
                        case "AOMORI":
                        case 2:
                            message.prefecture = 2;
                            break;
                        case "IWATE":
                        case 3:
                            message.prefecture = 3;
                            break;
                        case "MIYAGI":
                        case 4:
                            message.prefecture = 4;
                            break;
                        case "AKITA":
                        case 5:
                            message.prefecture = 5;
                            break;
                        case "YAMAGATA":
                        case 6:
                            message.prefecture = 6;
                            break;
                        case "FUKUSHIMA":
                        case 7:
                            message.prefecture = 7;
                            break;
                        case "IBARAKI":
                        case 8:
                            message.prefecture = 8;
                            break;
                        case "TOCHIGI":
                        case 9:
                            message.prefecture = 9;
                            break;
                        case "GUNNMA":
                        case 10:
                            message.prefecture = 10;
                            break;
                        case "SAITAMA":
                        case 11:
                            message.prefecture = 11;
                            break;
                        case "CHIBA":
                        case 12:
                            message.prefecture = 12;
                            break;
                        case "TOKYO":
                        case 13:
                            message.prefecture = 13;
                            break;
                        case "KANAGAWA":
                        case 14:
                            message.prefecture = 14;
                            break;
                        case "NIIGATA":
                        case 15:
                            message.prefecture = 15;
                            break;
                        case "TOYAMA":
                        case 16:
                            message.prefecture = 16;
                            break;
                        case "ISHIKAWA":
                        case 17:
                            message.prefecture = 17;
                            break;
                        case "FUKUI":
                        case 18:
                            message.prefecture = 18;
                            break;
                        case "YAMANASHI":
                        case 19:
                            message.prefecture = 19;
                            break;
                        case "NAGANO":
                        case 20:
                            message.prefecture = 20;
                            break;
                        case "GIFU":
                        case 21:
                            message.prefecture = 21;
                            break;
                        case "SHIZUOKA":
                        case 22:
                            message.prefecture = 22;
                            break;
                        case "AICHI":
                        case 23:
                            message.prefecture = 23;
                            break;
                        case "MIE":
                        case 24:
                            message.prefecture = 24;
                            break;
                        case "SHIGA":
                        case 25:
                            message.prefecture = 25;
                            break;
                        case "KYOTO":
                        case 26:
                            message.prefecture = 26;
                            break;
                        case "OSAKA":
                        case 27:
                            message.prefecture = 27;
                            break;
                        case "HYOGO":
                        case 28:
                            message.prefecture = 28;
                            break;
                        case "NARA":
                        case 29:
                            message.prefecture = 29;
                            break;
                        case "WAKAYAMA":
                        case 30:
                            message.prefecture = 30;
                            break;
                        case "TOTTORI":
                        case 31:
                            message.prefecture = 31;
                            break;
                        case "SHIMANE":
                        case 32:
                            message.prefecture = 32;
                            break;
                        case "OKAYAMA":
                        case 33:
                            message.prefecture = 33;
                            break;
                        case "HIROSHIMA":
                        case 34:
                            message.prefecture = 34;
                            break;
                        case "YAMAGUCHI":
                        case 35:
                            message.prefecture = 35;
                            break;
                        case "TOKUSHIMA":
                        case 36:
                            message.prefecture = 36;
                            break;
                        case "KAGAWA":
                        case 37:
                            message.prefecture = 37;
                            break;
                        case "EHIME":
                        case 38:
                            message.prefecture = 38;
                            break;
                        case "KOCHI":
                        case 39:
                            message.prefecture = 39;
                            break;
                        case "FUKUOKA":
                        case 40:
                            message.prefecture = 40;
                            break;
                        case "SAGA":
                        case 41:
                            message.prefecture = 41;
                            break;
                        case "NAGASAKI":
                        case 42:
                            message.prefecture = 42;
                            break;
                        case "KUMAMOTO":
                        case 43:
                            message.prefecture = 43;
                            break;
                        case "OITA":
                        case 44:
                            message.prefecture = 44;
                            break;
                        case "MIYAZAKI":
                        case 45:
                            message.prefecture = 45;
                            break;
                        case "KAGOSHIMA":
                        case 46:
                            message.prefecture = 46;
                            break;
                        case "OKINAWA":
                        case 47:
                            message.prefecture = 47;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a City message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {pj.sakuchin.percussion.proto.City} message City
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    City.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.name = "";
                            object.prefecture = options.enums === String ? "UNKNOWN" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.prefecture != null && message.hasOwnProperty("prefecture"))
                            object.prefecture = options.enums === String ? $root.pj.sakuchin.percussion.proto.Prefecture[message.prefecture] : message.prefecture;
                        return object;
                    };

                    /**
                     * Converts this City to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    City.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return City;
                })();

                proto.GetAreaCityResponse = (function() {

                    /**
                     * Properties of a GetAreaCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetAreaCityResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] GetAreaCityResponse cities
                     */

                    /**
                     * Constructs a new GetAreaCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetAreaCityResponse.
                     * @implements IGetAreaCityResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetAreaCityResponse=} [properties] Properties to set
                     */
                    function GetAreaCityResponse(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetAreaCityResponse cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @instance
                     */
                    GetAreaCityResponse.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new GetAreaCityResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetAreaCityResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetAreaCityResponse} GetAreaCityResponse instance
                     */
                    GetAreaCityResponse.create = function create(properties) {
                        return new GetAreaCityResponse(properties);
                    };

                    /**
                     * Encodes the specified GetAreaCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetAreaCityResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetAreaCityResponse} message GetAreaCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetAreaCityResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetAreaCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetAreaCityResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetAreaCityResponse} message GetAreaCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetAreaCityResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetAreaCityResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetAreaCityResponse} GetAreaCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetAreaCityResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetAreaCityResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetAreaCityResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetAreaCityResponse} GetAreaCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetAreaCityResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetAreaCityResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetAreaCityResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetAreaCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetAreaCityResponse} GetAreaCityResponse
                     */
                    GetAreaCityResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetAreaCityResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetAreaCityResponse();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetAreaCityResponse.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetAreaCityResponse.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetAreaCityResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetAreaCityResponse} message GetAreaCityResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetAreaCityResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetAreaCityResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetAreaCityResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetAreaCityResponse;
                })();

                proto.EmptyResponse = (function() {

                    /**
                     * Properties of an EmptyResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IEmptyResponse
                     */

                    /**
                     * Constructs a new EmptyResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents an EmptyResponse.
                     * @implements IEmptyResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IEmptyResponse=} [properties] Properties to set
                     */
                    function EmptyResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new EmptyResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IEmptyResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.EmptyResponse} EmptyResponse instance
                     */
                    EmptyResponse.create = function create(properties) {
                        return new EmptyResponse(properties);
                    };

                    /**
                     * Encodes the specified EmptyResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.EmptyResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IEmptyResponse} message EmptyResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EmptyResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified EmptyResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.EmptyResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IEmptyResponse} message EmptyResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EmptyResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EmptyResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.EmptyResponse} EmptyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EmptyResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.EmptyResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EmptyResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.EmptyResponse} EmptyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EmptyResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EmptyResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EmptyResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates an EmptyResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.EmptyResponse} EmptyResponse
                     */
                    EmptyResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.EmptyResponse)
                            return object;
                        return new $root.pj.sakuchin.percussion.proto.EmptyResponse();
                    };

                    /**
                     * Creates a plain object from an EmptyResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.EmptyResponse} message EmptyResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EmptyResponse.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this EmptyResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EmptyResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EmptyResponse;
                })();

                proto.PercussionApiError = (function() {

                    /**
                     * Properties of a PercussionApiError.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPercussionApiError
                     * @property {pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode|null} [errorCode] PercussionApiError errorCode
                     * @property {string|null} [message] PercussionApiError message
                     */

                    /**
                     * Constructs a new PercussionApiError.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PercussionApiError.
                     * @implements IPercussionApiError
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPercussionApiError=} [properties] Properties to set
                     */
                    function PercussionApiError(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PercussionApiError errorCode.
                     * @member {pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode} errorCode
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @instance
                     */
                    PercussionApiError.prototype.errorCode = 0;

                    /**
                     * PercussionApiError message.
                     * @member {string} message
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @instance
                     */
                    PercussionApiError.prototype.message = "";

                    /**
                     * Creates a new PercussionApiError instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPercussionApiError=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PercussionApiError} PercussionApiError instance
                     */
                    PercussionApiError.create = function create(properties) {
                        return new PercussionApiError(properties);
                    };

                    /**
                     * Encodes the specified PercussionApiError message. Does not implicitly {@link pj.sakuchin.percussion.proto.PercussionApiError.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPercussionApiError} message PercussionApiError message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PercussionApiError.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
                        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        return writer;
                    };

                    /**
                     * Encodes the specified PercussionApiError message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PercussionApiError.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPercussionApiError} message PercussionApiError message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PercussionApiError.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PercussionApiError message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PercussionApiError} PercussionApiError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PercussionApiError.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PercussionApiError();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.errorCode = reader.int32();
                                break;
                            case 2:
                                message.message = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PercussionApiError message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PercussionApiError} PercussionApiError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PercussionApiError.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PercussionApiError message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PercussionApiError.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                            switch (message.errorCode) {
                            default:
                                return "errorCode: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                break;
                            }
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        return null;
                    };

                    /**
                     * Creates a PercussionApiError message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PercussionApiError} PercussionApiError
                     */
                    PercussionApiError.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PercussionApiError)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PercussionApiError();
                        switch (object.errorCode) {
                        case "UNKNOWN":
                        case 0:
                            message.errorCode = 0;
                            break;
                        case "NO_TOKEN":
                        case 1:
                            message.errorCode = 1;
                            break;
                        case "INVALID_FIREBASE_TOKEN":
                        case 2:
                            message.errorCode = 2;
                            break;
                        case "USER_HAS_BEEN_ALREADY_REGISTERED":
                        case 3:
                            message.errorCode = 3;
                            break;
                        case "DB_ERROR":
                        case 4:
                            message.errorCode = 4;
                            break;
                        case "INVALID_PARAMETER":
                        case 5:
                            message.errorCode = 5;
                            break;
                        case "AUTHENTICATION_ERROR":
                        case 6:
                            message.errorCode = 6;
                            break;
                        case "LOGIN_REQUIRED":
                        case 7:
                            message.errorCode = 7;
                            break;
                        }
                        if (object.message != null)
                            message.message = String(object.message);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PercussionApiError message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PercussionApiError} message PercussionApiError
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PercussionApiError.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.errorCode = options.enums === String ? "UNKNOWN" : 0;
                            object.message = "";
                        }
                        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                            object.errorCode = options.enums === String ? $root.pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode[message.errorCode] : message.errorCode;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        return object;
                    };

                    /**
                     * Converts this PercussionApiError to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PercussionApiError.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * ErrorCode enum.
                     * @name pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode
                     * @enum {number}
                     * @property {number} UNKNOWN=0 UNKNOWN value
                     * @property {number} NO_TOKEN=1 NO_TOKEN value
                     * @property {number} INVALID_FIREBASE_TOKEN=2 INVALID_FIREBASE_TOKEN value
                     * @property {number} USER_HAS_BEEN_ALREADY_REGISTERED=3 USER_HAS_BEEN_ALREADY_REGISTERED value
                     * @property {number} DB_ERROR=4 DB_ERROR value
                     * @property {number} INVALID_PARAMETER=5 INVALID_PARAMETER value
                     * @property {number} AUTHENTICATION_ERROR=6 AUTHENTICATION_ERROR value
                     * @property {number} LOGIN_REQUIRED=7 LOGIN_REQUIRED value
                     */
                    PercussionApiError.ErrorCode = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "UNKNOWN"] = 0;
                        values[valuesById[1] = "NO_TOKEN"] = 1;
                        values[valuesById[2] = "INVALID_FIREBASE_TOKEN"] = 2;
                        values[valuesById[3] = "USER_HAS_BEEN_ALREADY_REGISTERED"] = 3;
                        values[valuesById[4] = "DB_ERROR"] = 4;
                        values[valuesById[5] = "INVALID_PARAMETER"] = 5;
                        values[valuesById[6] = "AUTHENTICATION_ERROR"] = 6;
                        values[valuesById[7] = "LOGIN_REQUIRED"] = 7;
                        return values;
                    })();

                    return PercussionApiError;
                })();

                proto.EditHistory = (function() {

                    /**
                     * Properties of an EditHistory.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IEditHistory
                     * @property {number|Long|null} [timeStamp] EditHistory timeStamp
                     * @property {string|null} [playerId] EditHistory playerId
                     */

                    /**
                     * Constructs a new EditHistory.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents an EditHistory.
                     * @implements IEditHistory
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IEditHistory=} [properties] Properties to set
                     */
                    function EditHistory(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EditHistory timeStamp.
                     * @member {number|Long} timeStamp
                     * @memberof pj.sakuchin.percussion.proto.EditHistory
                     * @instance
                     */
                    EditHistory.prototype.timeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * EditHistory playerId.
                     * @member {string} playerId
                     * @memberof pj.sakuchin.percussion.proto.EditHistory
                     * @instance
                     */
                    EditHistory.prototype.playerId = "";

                    /**
                     * Creates a new EditHistory instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.EditHistory
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IEditHistory=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.EditHistory} EditHistory instance
                     */
                    EditHistory.create = function create(properties) {
                        return new EditHistory(properties);
                    };

                    /**
                     * Encodes the specified EditHistory message. Does not implicitly {@link pj.sakuchin.percussion.proto.EditHistory.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.EditHistory
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IEditHistory} message EditHistory message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EditHistory.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.timeStamp != null && Object.hasOwnProperty.call(message, "timeStamp"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timeStamp);
                        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerId);
                        return writer;
                    };

                    /**
                     * Encodes the specified EditHistory message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.EditHistory.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.EditHistory
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IEditHistory} message EditHistory message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EditHistory.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EditHistory message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.EditHistory
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.EditHistory} EditHistory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EditHistory.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.EditHistory();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.timeStamp = reader.int64();
                                break;
                            case 2:
                                message.playerId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EditHistory message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.EditHistory
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.EditHistory} EditHistory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EditHistory.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EditHistory message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.EditHistory
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EditHistory.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                            if (!$util.isInteger(message.timeStamp) && !(message.timeStamp && $util.isInteger(message.timeStamp.low) && $util.isInteger(message.timeStamp.high)))
                                return "timeStamp: integer|Long expected";
                        if (message.playerId != null && message.hasOwnProperty("playerId"))
                            if (!$util.isString(message.playerId))
                                return "playerId: string expected";
                        return null;
                    };

                    /**
                     * Creates an EditHistory message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.EditHistory
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.EditHistory} EditHistory
                     */
                    EditHistory.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.EditHistory)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.EditHistory();
                        if (object.timeStamp != null)
                            if ($util.Long)
                                (message.timeStamp = $util.Long.fromValue(object.timeStamp)).unsigned = false;
                            else if (typeof object.timeStamp === "string")
                                message.timeStamp = parseInt(object.timeStamp, 10);
                            else if (typeof object.timeStamp === "number")
                                message.timeStamp = object.timeStamp;
                            else if (typeof object.timeStamp === "object")
                                message.timeStamp = new $util.LongBits(object.timeStamp.low >>> 0, object.timeStamp.high >>> 0).toNumber();
                        if (object.playerId != null)
                            message.playerId = String(object.playerId);
                        return message;
                    };

                    /**
                     * Creates a plain object from an EditHistory message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.EditHistory
                     * @static
                     * @param {pj.sakuchin.percussion.proto.EditHistory} message EditHistory
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EditHistory.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timeStamp = options.longs === String ? "0" : 0;
                            object.playerId = "";
                        }
                        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                            if (typeof message.timeStamp === "number")
                                object.timeStamp = options.longs === String ? String(message.timeStamp) : message.timeStamp;
                            else
                                object.timeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.timeStamp) : options.longs === Number ? new $util.LongBits(message.timeStamp.low >>> 0, message.timeStamp.high >>> 0).toNumber() : message.timeStamp;
                        if (message.playerId != null && message.hasOwnProperty("playerId"))
                            object.playerId = message.playerId;
                        return object;
                    };

                    /**
                     * Converts this EditHistory to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.EditHistory
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EditHistory.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EditHistory;
                })();

                proto.Instrument = (function() {

                    /**
                     * Properties of an Instrument.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IInstrument
                     * @property {number|null} [id] Instrument id
                     * @property {string|null} [name] Instrument name
                     * @property {string|null} [authorId] Instrument authorId
                     */

                    /**
                     * Constructs a new Instrument.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents an Instrument.
                     * @implements IInstrument
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IInstrument=} [properties] Properties to set
                     */
                    function Instrument(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Instrument id.
                     * @member {number} id
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @instance
                     */
                    Instrument.prototype.id = 0;

                    /**
                     * Instrument name.
                     * @member {string} name
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @instance
                     */
                    Instrument.prototype.name = "";

                    /**
                     * Instrument authorId.
                     * @member {string} authorId
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @instance
                     */
                    Instrument.prototype.authorId = "";

                    /**
                     * Creates a new Instrument instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IInstrument=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.Instrument} Instrument instance
                     */
                    Instrument.create = function create(properties) {
                        return new Instrument(properties);
                    };

                    /**
                     * Encodes the specified Instrument message. Does not implicitly {@link pj.sakuchin.percussion.proto.Instrument.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IInstrument} message Instrument message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Instrument.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.authorId != null && Object.hasOwnProperty.call(message, "authorId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.authorId);
                        return writer;
                    };

                    /**
                     * Encodes the specified Instrument message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.Instrument.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IInstrument} message Instrument message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Instrument.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Instrument message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.Instrument} Instrument
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Instrument.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.Instrument();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.int32();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.authorId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Instrument message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.Instrument} Instrument
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Instrument.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Instrument message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Instrument.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id))
                                return "id: integer expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.authorId != null && message.hasOwnProperty("authorId"))
                            if (!$util.isString(message.authorId))
                                return "authorId: string expected";
                        return null;
                    };

                    /**
                     * Creates an Instrument message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.Instrument} Instrument
                     */
                    Instrument.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.Instrument)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.Instrument();
                        if (object.id != null)
                            message.id = object.id | 0;
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.authorId != null)
                            message.authorId = String(object.authorId);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Instrument message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @static
                     * @param {pj.sakuchin.percussion.proto.Instrument} message Instrument
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Instrument.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = 0;
                            object.name = "";
                            object.authorId = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.authorId != null && message.hasOwnProperty("authorId"))
                            object.authorId = message.authorId;
                        return object;
                    };

                    /**
                     * Converts this Instrument to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.Instrument
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Instrument.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Instrument;
                })();

                proto.PostInstrumentRequest = (function() {

                    /**
                     * Properties of a PostInstrumentRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostInstrumentRequest
                     * @property {string|null} [name] PostInstrumentRequest name
                     */

                    /**
                     * Constructs a new PostInstrumentRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostInstrumentRequest.
                     * @implements IPostInstrumentRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostInstrumentRequest=} [properties] Properties to set
                     */
                    function PostInstrumentRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostInstrumentRequest name.
                     * @member {string} name
                     * @memberof pj.sakuchin.percussion.proto.PostInstrumentRequest
                     * @instance
                     */
                    PostInstrumentRequest.prototype.name = "";

                    /**
                     * Creates a new PostInstrumentRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostInstrumentRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostInstrumentRequest} PostInstrumentRequest instance
                     */
                    PostInstrumentRequest.create = function create(properties) {
                        return new PostInstrumentRequest(properties);
                    };

                    /**
                     * Encodes the specified PostInstrumentRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostInstrumentRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostInstrumentRequest} message PostInstrumentRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostInstrumentRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        return writer;
                    };

                    /**
                     * Encodes the specified PostInstrumentRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostInstrumentRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostInstrumentRequest} message PostInstrumentRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostInstrumentRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostInstrumentRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostInstrumentRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostInstrumentRequest} PostInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostInstrumentRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostInstrumentRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostInstrumentRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostInstrumentRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostInstrumentRequest} PostInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostInstrumentRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostInstrumentRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostInstrumentRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostInstrumentRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };

                    /**
                     * Creates a PostInstrumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostInstrumentRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostInstrumentRequest} PostInstrumentRequest
                     */
                    PostInstrumentRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostInstrumentRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostInstrumentRequest();
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostInstrumentRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostInstrumentRequest} message PostInstrumentRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostInstrumentRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.name = "";
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };

                    /**
                     * Converts this PostInstrumentRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostInstrumentRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostInstrumentRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostInstrumentRequest;
                })();

                proto.GetInstrumentByIdResoponse = (function() {

                    /**
                     * Properties of a GetInstrumentByIdResoponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetInstrumentByIdResoponse
                     * @property {pj.sakuchin.percussion.proto.IInstrument|null} [instrument] GetInstrumentByIdResoponse instrument
                     */

                    /**
                     * Constructs a new GetInstrumentByIdResoponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetInstrumentByIdResoponse.
                     * @implements IGetInstrumentByIdResoponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentByIdResoponse=} [properties] Properties to set
                     */
                    function GetInstrumentByIdResoponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetInstrumentByIdResoponse instrument.
                     * @member {pj.sakuchin.percussion.proto.IInstrument|null|undefined} instrument
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse
                     * @instance
                     */
                    GetInstrumentByIdResoponse.prototype.instrument = null;

                    /**
                     * Creates a new GetInstrumentByIdResoponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentByIdResoponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse} GetInstrumentByIdResoponse instance
                     */
                    GetInstrumentByIdResoponse.create = function create(properties) {
                        return new GetInstrumentByIdResoponse(properties);
                    };

                    /**
                     * Encodes the specified GetInstrumentByIdResoponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentByIdResoponse} message GetInstrumentByIdResoponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetInstrumentByIdResoponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instrument != null && Object.hasOwnProperty.call(message, "instrument"))
                            $root.pj.sakuchin.percussion.proto.Instrument.encode(message.instrument, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetInstrumentByIdResoponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentByIdResoponse} message GetInstrumentByIdResoponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetInstrumentByIdResoponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetInstrumentByIdResoponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse} GetInstrumentByIdResoponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetInstrumentByIdResoponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.instrument = $root.pj.sakuchin.percussion.proto.Instrument.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetInstrumentByIdResoponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse} GetInstrumentByIdResoponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetInstrumentByIdResoponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetInstrumentByIdResoponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetInstrumentByIdResoponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instrument != null && message.hasOwnProperty("instrument")) {
                            var error = $root.pj.sakuchin.percussion.proto.Instrument.verify(message.instrument);
                            if (error)
                                return "instrument." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a GetInstrumentByIdResoponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse} GetInstrumentByIdResoponse
                     */
                    GetInstrumentByIdResoponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse();
                        if (object.instrument != null) {
                            if (typeof object.instrument !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse.instrument: object expected");
                            message.instrument = $root.pj.sakuchin.percussion.proto.Instrument.fromObject(object.instrument);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetInstrumentByIdResoponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse} message GetInstrumentByIdResoponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetInstrumentByIdResoponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.instrument = null;
                        if (message.instrument != null && message.hasOwnProperty("instrument"))
                            object.instrument = $root.pj.sakuchin.percussion.proto.Instrument.toObject(message.instrument, options);
                        return object;
                    };

                    /**
                     * Converts this GetInstrumentByIdResoponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentByIdResoponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetInstrumentByIdResoponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetInstrumentByIdResoponse;
                })();

                proto.PutInstrumentByIdRequest = (function() {

                    /**
                     * Properties of a PutInstrumentByIdRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutInstrumentByIdRequest
                     * @property {pj.sakuchin.percussion.proto.IInstrument|null} [instrument] PutInstrumentByIdRequest instrument
                     */

                    /**
                     * Constructs a new PutInstrumentByIdRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutInstrumentByIdRequest.
                     * @implements IPutInstrumentByIdRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutInstrumentByIdRequest=} [properties] Properties to set
                     */
                    function PutInstrumentByIdRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutInstrumentByIdRequest instrument.
                     * @member {pj.sakuchin.percussion.proto.IInstrument|null|undefined} instrument
                     * @memberof pj.sakuchin.percussion.proto.PutInstrumentByIdRequest
                     * @instance
                     */
                    PutInstrumentByIdRequest.prototype.instrument = null;

                    /**
                     * Creates a new PutInstrumentByIdRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutInstrumentByIdRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutInstrumentByIdRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutInstrumentByIdRequest} PutInstrumentByIdRequest instance
                     */
                    PutInstrumentByIdRequest.create = function create(properties) {
                        return new PutInstrumentByIdRequest(properties);
                    };

                    /**
                     * Encodes the specified PutInstrumentByIdRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutInstrumentByIdRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutInstrumentByIdRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutInstrumentByIdRequest} message PutInstrumentByIdRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutInstrumentByIdRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instrument != null && Object.hasOwnProperty.call(message, "instrument"))
                            $root.pj.sakuchin.percussion.proto.Instrument.encode(message.instrument, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PutInstrumentByIdRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutInstrumentByIdRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutInstrumentByIdRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutInstrumentByIdRequest} message PutInstrumentByIdRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutInstrumentByIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutInstrumentByIdRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutInstrumentByIdRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutInstrumentByIdRequest} PutInstrumentByIdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutInstrumentByIdRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutInstrumentByIdRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.instrument = $root.pj.sakuchin.percussion.proto.Instrument.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutInstrumentByIdRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutInstrumentByIdRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutInstrumentByIdRequest} PutInstrumentByIdRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutInstrumentByIdRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutInstrumentByIdRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutInstrumentByIdRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutInstrumentByIdRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instrument != null && message.hasOwnProperty("instrument")) {
                            var error = $root.pj.sakuchin.percussion.proto.Instrument.verify(message.instrument);
                            if (error)
                                return "instrument." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a PutInstrumentByIdRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutInstrumentByIdRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutInstrumentByIdRequest} PutInstrumentByIdRequest
                     */
                    PutInstrumentByIdRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutInstrumentByIdRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutInstrumentByIdRequest();
                        if (object.instrument != null) {
                            if (typeof object.instrument !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PutInstrumentByIdRequest.instrument: object expected");
                            message.instrument = $root.pj.sakuchin.percussion.proto.Instrument.fromObject(object.instrument);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutInstrumentByIdRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutInstrumentByIdRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutInstrumentByIdRequest} message PutInstrumentByIdRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutInstrumentByIdRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.instrument = null;
                        if (message.instrument != null && message.hasOwnProperty("instrument"))
                            object.instrument = $root.pj.sakuchin.percussion.proto.Instrument.toObject(message.instrument, options);
                        return object;
                    };

                    /**
                     * Converts this PutInstrumentByIdRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutInstrumentByIdRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutInstrumentByIdRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutInstrumentByIdRequest;
                })();

                proto.GetInstrumentsResponse = (function() {

                    /**
                     * Properties of a GetInstrumentsResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetInstrumentsResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IInstrument>|null} [instruments] GetInstrumentsResponse instruments
                     */

                    /**
                     * Constructs a new GetInstrumentsResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetInstrumentsResponse.
                     * @implements IGetInstrumentsResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentsResponse=} [properties] Properties to set
                     */
                    function GetInstrumentsResponse(properties) {
                        this.instruments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetInstrumentsResponse instruments.
                     * @member {Array.<pj.sakuchin.percussion.proto.IInstrument>} instruments
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentsResponse
                     * @instance
                     */
                    GetInstrumentsResponse.prototype.instruments = $util.emptyArray;

                    /**
                     * Creates a new GetInstrumentsResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentsResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentsResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentsResponse} GetInstrumentsResponse instance
                     */
                    GetInstrumentsResponse.create = function create(properties) {
                        return new GetInstrumentsResponse(properties);
                    };

                    /**
                     * Encodes the specified GetInstrumentsResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentsResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentsResponse} message GetInstrumentsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetInstrumentsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instruments != null && message.instruments.length)
                            for (var i = 0; i < message.instruments.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Instrument.encode(message.instruments[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetInstrumentsResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentsResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentsResponse} message GetInstrumentsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetInstrumentsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetInstrumentsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentsResponse} GetInstrumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetInstrumentsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetInstrumentsResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.instruments && message.instruments.length))
                                    message.instruments = [];
                                message.instruments.push($root.pj.sakuchin.percussion.proto.Instrument.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetInstrumentsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentsResponse} GetInstrumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetInstrumentsResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetInstrumentsResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetInstrumentsResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instruments != null && message.hasOwnProperty("instruments")) {
                            if (!Array.isArray(message.instruments))
                                return "instruments: array expected";
                            for (var i = 0; i < message.instruments.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Instrument.verify(message.instruments[i]);
                                if (error)
                                    return "instruments." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetInstrumentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentsResponse} GetInstrumentsResponse
                     */
                    GetInstrumentsResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetInstrumentsResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetInstrumentsResponse();
                        if (object.instruments) {
                            if (!Array.isArray(object.instruments))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetInstrumentsResponse.instruments: array expected");
                            message.instruments = [];
                            for (var i = 0; i < object.instruments.length; ++i) {
                                if (typeof object.instruments[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetInstrumentsResponse.instruments: object expected");
                                message.instruments[i] = $root.pj.sakuchin.percussion.proto.Instrument.fromObject(object.instruments[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetInstrumentsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentsResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetInstrumentsResponse} message GetInstrumentsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetInstrumentsResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.instruments = [];
                        if (message.instruments && message.instruments.length) {
                            object.instruments = [];
                            for (var j = 0; j < message.instruments.length; ++j)
                                object.instruments[j] = $root.pj.sakuchin.percussion.proto.Instrument.toObject(message.instruments[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetInstrumentsResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetInstrumentsResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetInstrumentsResponse;
                })();

                proto.GetInstrumentHistoryEditResponse = (function() {

                    /**
                     * Properties of a GetInstrumentHistoryEditResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetInstrumentHistoryEditResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IEditHistory>|null} [history] GetInstrumentHistoryEditResponse history
                     */

                    /**
                     * Constructs a new GetInstrumentHistoryEditResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetInstrumentHistoryEditResponse.
                     * @implements IGetInstrumentHistoryEditResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentHistoryEditResponse=} [properties] Properties to set
                     */
                    function GetInstrumentHistoryEditResponse(properties) {
                        this.history = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetInstrumentHistoryEditResponse history.
                     * @member {Array.<pj.sakuchin.percussion.proto.IEditHistory>} history
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse
                     * @instance
                     */
                    GetInstrumentHistoryEditResponse.prototype.history = $util.emptyArray;

                    /**
                     * Creates a new GetInstrumentHistoryEditResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentHistoryEditResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse} GetInstrumentHistoryEditResponse instance
                     */
                    GetInstrumentHistoryEditResponse.create = function create(properties) {
                        return new GetInstrumentHistoryEditResponse(properties);
                    };

                    /**
                     * Encodes the specified GetInstrumentHistoryEditResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentHistoryEditResponse} message GetInstrumentHistoryEditResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetInstrumentHistoryEditResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.history != null && message.history.length)
                            for (var i = 0; i < message.history.length; ++i)
                                $root.pj.sakuchin.percussion.proto.EditHistory.encode(message.history[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetInstrumentHistoryEditResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetInstrumentHistoryEditResponse} message GetInstrumentHistoryEditResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetInstrumentHistoryEditResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetInstrumentHistoryEditResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse} GetInstrumentHistoryEditResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetInstrumentHistoryEditResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.history && message.history.length))
                                    message.history = [];
                                message.history.push($root.pj.sakuchin.percussion.proto.EditHistory.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetInstrumentHistoryEditResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse} GetInstrumentHistoryEditResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetInstrumentHistoryEditResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetInstrumentHistoryEditResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetInstrumentHistoryEditResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.history != null && message.hasOwnProperty("history")) {
                            if (!Array.isArray(message.history))
                                return "history: array expected";
                            for (var i = 0; i < message.history.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.EditHistory.verify(message.history[i]);
                                if (error)
                                    return "history." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetInstrumentHistoryEditResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse} GetInstrumentHistoryEditResponse
                     */
                    GetInstrumentHistoryEditResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse();
                        if (object.history) {
                            if (!Array.isArray(object.history))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse.history: array expected");
                            message.history = [];
                            for (var i = 0; i < object.history.length; ++i) {
                                if (typeof object.history[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse.history: object expected");
                                message.history[i] = $root.pj.sakuchin.percussion.proto.EditHistory.fromObject(object.history[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetInstrumentHistoryEditResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse} message GetInstrumentHistoryEditResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetInstrumentHistoryEditResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.history = [];
                        if (message.history && message.history.length) {
                            object.history = [];
                            for (var j = 0; j < message.history.length; ++j)
                                object.history[j] = $root.pj.sakuchin.percussion.proto.EditHistory.toObject(message.history[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetInstrumentHistoryEditResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetInstrumentHistoryEditResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetInstrumentHistoryEditResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetInstrumentHistoryEditResponse;
                })();

                proto.PostSignupRequest = (function() {

                    /**
                     * Properties of a PostSignupRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostSignupRequest
                     * @property {string|null} [token] PostSignupRequest token
                     * @property {string|null} [name] PostSignupRequest name
                     */

                    /**
                     * Constructs a new PostSignupRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostSignupRequest.
                     * @implements IPostSignupRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostSignupRequest=} [properties] Properties to set
                     */
                    function PostSignupRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostSignupRequest token.
                     * @member {string} token
                     * @memberof pj.sakuchin.percussion.proto.PostSignupRequest
                     * @instance
                     */
                    PostSignupRequest.prototype.token = "";

                    /**
                     * PostSignupRequest name.
                     * @member {string} name
                     * @memberof pj.sakuchin.percussion.proto.PostSignupRequest
                     * @instance
                     */
                    PostSignupRequest.prototype.name = "";

                    /**
                     * Creates a new PostSignupRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostSignupRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostSignupRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostSignupRequest} PostSignupRequest instance
                     */
                    PostSignupRequest.create = function create(properties) {
                        return new PostSignupRequest(properties);
                    };

                    /**
                     * Encodes the specified PostSignupRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostSignupRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostSignupRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostSignupRequest} message PostSignupRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostSignupRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        return writer;
                    };

                    /**
                     * Encodes the specified PostSignupRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostSignupRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostSignupRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostSignupRequest} message PostSignupRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostSignupRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostSignupRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostSignupRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostSignupRequest} PostSignupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostSignupRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostSignupRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.token = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostSignupRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostSignupRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostSignupRequest} PostSignupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostSignupRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostSignupRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostSignupRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostSignupRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.token != null && message.hasOwnProperty("token"))
                            if (!$util.isString(message.token))
                                return "token: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };

                    /**
                     * Creates a PostSignupRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostSignupRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostSignupRequest} PostSignupRequest
                     */
                    PostSignupRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostSignupRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostSignupRequest();
                        if (object.token != null)
                            message.token = String(object.token);
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostSignupRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostSignupRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostSignupRequest} message PostSignupRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostSignupRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.token = "";
                            object.name = "";
                        }
                        if (message.token != null && message.hasOwnProperty("token"))
                            object.token = message.token;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };

                    /**
                     * Converts this PostSignupRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostSignupRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostSignupRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostSignupRequest;
                })();

                proto.PostSignupResponse = (function() {

                    /**
                     * Properties of a PostSignupResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostSignupResponse
                     * @property {pj.sakuchin.percussion.proto.IPlayer|null} [player] PostSignupResponse player
                     */

                    /**
                     * Constructs a new PostSignupResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostSignupResponse.
                     * @implements IPostSignupResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostSignupResponse=} [properties] Properties to set
                     */
                    function PostSignupResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostSignupResponse player.
                     * @member {pj.sakuchin.percussion.proto.IPlayer|null|undefined} player
                     * @memberof pj.sakuchin.percussion.proto.PostSignupResponse
                     * @instance
                     */
                    PostSignupResponse.prototype.player = null;

                    /**
                     * Creates a new PostSignupResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostSignupResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostSignupResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostSignupResponse} PostSignupResponse instance
                     */
                    PostSignupResponse.create = function create(properties) {
                        return new PostSignupResponse(properties);
                    };

                    /**
                     * Encodes the specified PostSignupResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostSignupResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostSignupResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostSignupResponse} message PostSignupResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostSignupResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                            $root.pj.sakuchin.percussion.proto.Player.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PostSignupResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostSignupResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostSignupResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostSignupResponse} message PostSignupResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostSignupResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostSignupResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostSignupResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostSignupResponse} PostSignupResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostSignupResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostSignupResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.player = $root.pj.sakuchin.percussion.proto.Player.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostSignupResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostSignupResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostSignupResponse} PostSignupResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostSignupResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostSignupResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostSignupResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostSignupResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.player != null && message.hasOwnProperty("player")) {
                            var error = $root.pj.sakuchin.percussion.proto.Player.verify(message.player);
                            if (error)
                                return "player." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a PostSignupResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostSignupResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostSignupResponse} PostSignupResponse
                     */
                    PostSignupResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostSignupResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostSignupResponse();
                        if (object.player != null) {
                            if (typeof object.player !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PostSignupResponse.player: object expected");
                            message.player = $root.pj.sakuchin.percussion.proto.Player.fromObject(object.player);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostSignupResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostSignupResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostSignupResponse} message PostSignupResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostSignupResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.player = null;
                        if (message.player != null && message.hasOwnProperty("player"))
                            object.player = $root.pj.sakuchin.percussion.proto.Player.toObject(message.player, options);
                        return object;
                    };

                    /**
                     * Converts this PostSignupResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostSignupResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostSignupResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostSignupResponse;
                })();

                proto.PostLoginRequest = (function() {

                    /**
                     * Properties of a PostLoginRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostLoginRequest
                     * @property {string|null} [token] PostLoginRequest token
                     */

                    /**
                     * Constructs a new PostLoginRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostLoginRequest.
                     * @implements IPostLoginRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostLoginRequest=} [properties] Properties to set
                     */
                    function PostLoginRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostLoginRequest token.
                     * @member {string} token
                     * @memberof pj.sakuchin.percussion.proto.PostLoginRequest
                     * @instance
                     */
                    PostLoginRequest.prototype.token = "";

                    /**
                     * Creates a new PostLoginRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostLoginRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostLoginRequest} PostLoginRequest instance
                     */
                    PostLoginRequest.create = function create(properties) {
                        return new PostLoginRequest(properties);
                    };

                    /**
                     * Encodes the specified PostLoginRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostLoginRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostLoginRequest} message PostLoginRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostLoginRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                        return writer;
                    };

                    /**
                     * Encodes the specified PostLoginRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostLoginRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostLoginRequest} message PostLoginRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostLoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostLoginRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostLoginRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostLoginRequest} PostLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostLoginRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostLoginRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.token = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostLoginRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostLoginRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostLoginRequest} PostLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostLoginRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostLoginRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostLoginRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostLoginRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.token != null && message.hasOwnProperty("token"))
                            if (!$util.isString(message.token))
                                return "token: string expected";
                        return null;
                    };

                    /**
                     * Creates a PostLoginRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostLoginRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostLoginRequest} PostLoginRequest
                     */
                    PostLoginRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostLoginRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostLoginRequest();
                        if (object.token != null)
                            message.token = String(object.token);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostLoginRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostLoginRequest} message PostLoginRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostLoginRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.token = "";
                        if (message.token != null && message.hasOwnProperty("token"))
                            object.token = message.token;
                        return object;
                    };

                    /**
                     * Converts this PostLoginRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostLoginRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostLoginRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostLoginRequest;
                })();

                proto.PostLoginResponse = (function() {

                    /**
                     * Properties of a PostLoginResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostLoginResponse
                     * @property {pj.sakuchin.percussion.proto.IPlayer|null} [player] PostLoginResponse player
                     */

                    /**
                     * Constructs a new PostLoginResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostLoginResponse.
                     * @implements IPostLoginResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostLoginResponse=} [properties] Properties to set
                     */
                    function PostLoginResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostLoginResponse player.
                     * @member {pj.sakuchin.percussion.proto.IPlayer|null|undefined} player
                     * @memberof pj.sakuchin.percussion.proto.PostLoginResponse
                     * @instance
                     */
                    PostLoginResponse.prototype.player = null;

                    /**
                     * Creates a new PostLoginResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostLoginResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostLoginResponse} PostLoginResponse instance
                     */
                    PostLoginResponse.create = function create(properties) {
                        return new PostLoginResponse(properties);
                    };

                    /**
                     * Encodes the specified PostLoginResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostLoginResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostLoginResponse} message PostLoginResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostLoginResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                            $root.pj.sakuchin.percussion.proto.Player.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PostLoginResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostLoginResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostLoginResponse} message PostLoginResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostLoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostLoginResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostLoginResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostLoginResponse} PostLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostLoginResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostLoginResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.player = $root.pj.sakuchin.percussion.proto.Player.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostLoginResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostLoginResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostLoginResponse} PostLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostLoginResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostLoginResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostLoginResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostLoginResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.player != null && message.hasOwnProperty("player")) {
                            var error = $root.pj.sakuchin.percussion.proto.Player.verify(message.player);
                            if (error)
                                return "player." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a PostLoginResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostLoginResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostLoginResponse} PostLoginResponse
                     */
                    PostLoginResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostLoginResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostLoginResponse();
                        if (object.player != null) {
                            if (typeof object.player !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PostLoginResponse.player: object expected");
                            message.player = $root.pj.sakuchin.percussion.proto.Player.fromObject(object.player);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostLoginResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostLoginResponse} message PostLoginResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostLoginResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.player = null;
                        if (message.player != null && message.hasOwnProperty("player"))
                            object.player = $root.pj.sakuchin.percussion.proto.Player.toObject(message.player, options);
                        return object;
                    };

                    /**
                     * Converts this PostLoginResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostLoginResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostLoginResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostLoginResponse;
                })();

                proto.GetMyselfDetailResponse = (function() {

                    /**
                     * Properties of a GetMyselfDetailResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetMyselfDetailResponse
                     * @property {pj.sakuchin.percussion.proto.IPlayerDetail|null} [detail] GetMyselfDetailResponse detail
                     */

                    /**
                     * Constructs a new GetMyselfDetailResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetMyselfDetailResponse.
                     * @implements IGetMyselfDetailResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailResponse=} [properties] Properties to set
                     */
                    function GetMyselfDetailResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetMyselfDetailResponse detail.
                     * @member {pj.sakuchin.percussion.proto.IPlayerDetail|null|undefined} detail
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailResponse
                     * @instance
                     */
                    GetMyselfDetailResponse.prototype.detail = null;

                    /**
                     * Creates a new GetMyselfDetailResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailResponse} GetMyselfDetailResponse instance
                     */
                    GetMyselfDetailResponse.create = function create(properties) {
                        return new GetMyselfDetailResponse(properties);
                    };

                    /**
                     * Encodes the specified GetMyselfDetailResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailResponse} message GetMyselfDetailResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselfDetailResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                            $root.pj.sakuchin.percussion.proto.PlayerDetail.encode(message.detail, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetMyselfDetailResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailResponse} message GetMyselfDetailResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselfDetailResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetMyselfDetailResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailResponse} GetMyselfDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselfDetailResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetMyselfDetailResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetMyselfDetailResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailResponse} GetMyselfDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselfDetailResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetMyselfDetailResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetMyselfDetailResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.detail != null && message.hasOwnProperty("detail")) {
                            var error = $root.pj.sakuchin.percussion.proto.PlayerDetail.verify(message.detail);
                            if (error)
                                return "detail." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a GetMyselfDetailResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailResponse} GetMyselfDetailResponse
                     */
                    GetMyselfDetailResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetMyselfDetailResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetMyselfDetailResponse();
                        if (object.detail != null) {
                            if (typeof object.detail !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.GetMyselfDetailResponse.detail: object expected");
                            message.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.fromObject(object.detail);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetMyselfDetailResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetMyselfDetailResponse} message GetMyselfDetailResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetMyselfDetailResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.detail = null;
                        if (message.detail != null && message.hasOwnProperty("detail"))
                            object.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.toObject(message.detail, options);
                        return object;
                    };

                    /**
                     * Converts this GetMyselfDetailResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetMyselfDetailResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetMyselfDetailResponse;
                })();

                proto.PutMyselfDetailRequest = (function() {

                    /**
                     * Properties of a PutMyselfDetailRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutMyselfDetailRequest
                     * @property {pj.sakuchin.percussion.proto.IPlayerDetail|null} [detail] PutMyselfDetailRequest detail
                     */

                    /**
                     * Constructs a new PutMyselfDetailRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutMyselfDetailRequest.
                     * @implements IPutMyselfDetailRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailRequest=} [properties] Properties to set
                     */
                    function PutMyselfDetailRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutMyselfDetailRequest detail.
                     * @member {pj.sakuchin.percussion.proto.IPlayerDetail|null|undefined} detail
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailRequest
                     * @instance
                     */
                    PutMyselfDetailRequest.prototype.detail = null;

                    /**
                     * Creates a new PutMyselfDetailRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailRequest} PutMyselfDetailRequest instance
                     */
                    PutMyselfDetailRequest.create = function create(properties) {
                        return new PutMyselfDetailRequest(properties);
                    };

                    /**
                     * Encodes the specified PutMyselfDetailRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailRequest} message PutMyselfDetailRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselfDetailRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                            $root.pj.sakuchin.percussion.proto.PlayerDetail.encode(message.detail, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PutMyselfDetailRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailRequest} message PutMyselfDetailRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselfDetailRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutMyselfDetailRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailRequest} PutMyselfDetailRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselfDetailRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutMyselfDetailRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutMyselfDetailRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailRequest} PutMyselfDetailRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselfDetailRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutMyselfDetailRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutMyselfDetailRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.detail != null && message.hasOwnProperty("detail")) {
                            var error = $root.pj.sakuchin.percussion.proto.PlayerDetail.verify(message.detail);
                            if (error)
                                return "detail." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a PutMyselfDetailRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailRequest} PutMyselfDetailRequest
                     */
                    PutMyselfDetailRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutMyselfDetailRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutMyselfDetailRequest();
                        if (object.detail != null) {
                            if (typeof object.detail !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PutMyselfDetailRequest.detail: object expected");
                            message.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.fromObject(object.detail);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutMyselfDetailRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutMyselfDetailRequest} message PutMyselfDetailRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutMyselfDetailRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.detail = null;
                        if (message.detail != null && message.hasOwnProperty("detail"))
                            object.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.toObject(message.detail, options);
                        return object;
                    };

                    /**
                     * Converts this PutMyselfDetailRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutMyselfDetailRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutMyselfDetailRequest;
                })();

                proto.PutMyselfDetailResponse = (function() {

                    /**
                     * Properties of a PutMyselfDetailResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutMyselfDetailResponse
                     * @property {pj.sakuchin.percussion.proto.IPlayerDetail|null} [detail] PutMyselfDetailResponse detail
                     */

                    /**
                     * Constructs a new PutMyselfDetailResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutMyselfDetailResponse.
                     * @implements IPutMyselfDetailResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailResponse=} [properties] Properties to set
                     */
                    function PutMyselfDetailResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutMyselfDetailResponse detail.
                     * @member {pj.sakuchin.percussion.proto.IPlayerDetail|null|undefined} detail
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailResponse
                     * @instance
                     */
                    PutMyselfDetailResponse.prototype.detail = null;

                    /**
                     * Creates a new PutMyselfDetailResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailResponse} PutMyselfDetailResponse instance
                     */
                    PutMyselfDetailResponse.create = function create(properties) {
                        return new PutMyselfDetailResponse(properties);
                    };

                    /**
                     * Encodes the specified PutMyselfDetailResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailResponse} message PutMyselfDetailResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselfDetailResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                            $root.pj.sakuchin.percussion.proto.PlayerDetail.encode(message.detail, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PutMyselfDetailResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailResponse} message PutMyselfDetailResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselfDetailResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutMyselfDetailResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailResponse} PutMyselfDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselfDetailResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutMyselfDetailResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutMyselfDetailResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailResponse} PutMyselfDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselfDetailResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutMyselfDetailResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutMyselfDetailResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.detail != null && message.hasOwnProperty("detail")) {
                            var error = $root.pj.sakuchin.percussion.proto.PlayerDetail.verify(message.detail);
                            if (error)
                                return "detail." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a PutMyselfDetailResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailResponse} PutMyselfDetailResponse
                     */
                    PutMyselfDetailResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutMyselfDetailResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutMyselfDetailResponse();
                        if (object.detail != null) {
                            if (typeof object.detail !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PutMyselfDetailResponse.detail: object expected");
                            message.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.fromObject(object.detail);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutMyselfDetailResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutMyselfDetailResponse} message PutMyselfDetailResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutMyselfDetailResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.detail = null;
                        if (message.detail != null && message.hasOwnProperty("detail"))
                            object.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.toObject(message.detail, options);
                        return object;
                    };

                    /**
                     * Converts this PutMyselfDetailResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutMyselfDetailResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutMyselfDetailResponse;
                })();

                proto.GetMyselfDetailAreaResponse = (function() {

                    /**
                     * Properties of a GetMyselfDetailAreaResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetMyselfDetailAreaResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] GetMyselfDetailAreaResponse cities
                     */

                    /**
                     * Constructs a new GetMyselfDetailAreaResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetMyselfDetailAreaResponse.
                     * @implements IGetMyselfDetailAreaResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailAreaResponse=} [properties] Properties to set
                     */
                    function GetMyselfDetailAreaResponse(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetMyselfDetailAreaResponse cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse
                     * @instance
                     */
                    GetMyselfDetailAreaResponse.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new GetMyselfDetailAreaResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailAreaResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse} GetMyselfDetailAreaResponse instance
                     */
                    GetMyselfDetailAreaResponse.create = function create(properties) {
                        return new GetMyselfDetailAreaResponse(properties);
                    };

                    /**
                     * Encodes the specified GetMyselfDetailAreaResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailAreaResponse} message GetMyselfDetailAreaResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselfDetailAreaResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetMyselfDetailAreaResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailAreaResponse} message GetMyselfDetailAreaResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselfDetailAreaResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetMyselfDetailAreaResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse} GetMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselfDetailAreaResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetMyselfDetailAreaResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse} GetMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselfDetailAreaResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetMyselfDetailAreaResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetMyselfDetailAreaResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetMyselfDetailAreaResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse} GetMyselfDetailAreaResponse
                     */
                    GetMyselfDetailAreaResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetMyselfDetailAreaResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse} message GetMyselfDetailAreaResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetMyselfDetailAreaResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetMyselfDetailAreaResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailAreaResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetMyselfDetailAreaResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetMyselfDetailAreaResponse;
                })();

                proto.PostMyselfDetailAreaRequest = (function() {

                    /**
                     * Properties of a PostMyselfDetailAreaRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostMyselfDetailAreaRequest
                     * @property {string|null} [cityId] PostMyselfDetailAreaRequest cityId
                     */

                    /**
                     * Constructs a new PostMyselfDetailAreaRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostMyselfDetailAreaRequest.
                     * @implements IPostMyselfDetailAreaRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailAreaRequest=} [properties] Properties to set
                     */
                    function PostMyselfDetailAreaRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostMyselfDetailAreaRequest cityId.
                     * @member {string} cityId
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest
                     * @instance
                     */
                    PostMyselfDetailAreaRequest.prototype.cityId = "";

                    /**
                     * Creates a new PostMyselfDetailAreaRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailAreaRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest} PostMyselfDetailAreaRequest instance
                     */
                    PostMyselfDetailAreaRequest.create = function create(properties) {
                        return new PostMyselfDetailAreaRequest(properties);
                    };

                    /**
                     * Encodes the specified PostMyselfDetailAreaRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailAreaRequest} message PostMyselfDetailAreaRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselfDetailAreaRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cityId != null && Object.hasOwnProperty.call(message, "cityId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.cityId);
                        return writer;
                    };

                    /**
                     * Encodes the specified PostMyselfDetailAreaRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailAreaRequest} message PostMyselfDetailAreaRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselfDetailAreaRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostMyselfDetailAreaRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest} PostMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselfDetailAreaRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.cityId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostMyselfDetailAreaRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest} PostMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselfDetailAreaRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostMyselfDetailAreaRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostMyselfDetailAreaRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cityId != null && message.hasOwnProperty("cityId"))
                            if (!$util.isString(message.cityId))
                                return "cityId: string expected";
                        return null;
                    };

                    /**
                     * Creates a PostMyselfDetailAreaRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest} PostMyselfDetailAreaRequest
                     */
                    PostMyselfDetailAreaRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest();
                        if (object.cityId != null)
                            message.cityId = String(object.cityId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostMyselfDetailAreaRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest} message PostMyselfDetailAreaRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostMyselfDetailAreaRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.cityId = "";
                        if (message.cityId != null && message.hasOwnProperty("cityId"))
                            object.cityId = message.cityId;
                        return object;
                    };

                    /**
                     * Converts this PostMyselfDetailAreaRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostMyselfDetailAreaRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostMyselfDetailAreaRequest;
                })();

                proto.PostMyselfDetailAreaResponse = (function() {

                    /**
                     * Properties of a PostMyselfDetailAreaResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostMyselfDetailAreaResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] PostMyselfDetailAreaResponse cities
                     */

                    /**
                     * Constructs a new PostMyselfDetailAreaResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostMyselfDetailAreaResponse.
                     * @implements IPostMyselfDetailAreaResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailAreaResponse=} [properties] Properties to set
                     */
                    function PostMyselfDetailAreaResponse(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostMyselfDetailAreaResponse cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse
                     * @instance
                     */
                    PostMyselfDetailAreaResponse.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new PostMyselfDetailAreaResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailAreaResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse} PostMyselfDetailAreaResponse instance
                     */
                    PostMyselfDetailAreaResponse.create = function create(properties) {
                        return new PostMyselfDetailAreaResponse(properties);
                    };

                    /**
                     * Encodes the specified PostMyselfDetailAreaResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailAreaResponse} message PostMyselfDetailAreaResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselfDetailAreaResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PostMyselfDetailAreaResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailAreaResponse} message PostMyselfDetailAreaResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselfDetailAreaResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostMyselfDetailAreaResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse} PostMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselfDetailAreaResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostMyselfDetailAreaResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse} PostMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselfDetailAreaResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostMyselfDetailAreaResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostMyselfDetailAreaResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PostMyselfDetailAreaResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse} PostMyselfDetailAreaResponse
                     */
                    PostMyselfDetailAreaResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostMyselfDetailAreaResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse} message PostMyselfDetailAreaResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostMyselfDetailAreaResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PostMyselfDetailAreaResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailAreaResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostMyselfDetailAreaResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostMyselfDetailAreaResponse;
                })();

                proto.DeleteMyselfDetailAreaRequest = (function() {

                    /**
                     * Properties of a DeleteMyselfDetailAreaRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IDeleteMyselfDetailAreaRequest
                     * @property {string|null} [cityId] DeleteMyselfDetailAreaRequest cityId
                     */

                    /**
                     * Constructs a new DeleteMyselfDetailAreaRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a DeleteMyselfDetailAreaRequest.
                     * @implements IDeleteMyselfDetailAreaRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaRequest=} [properties] Properties to set
                     */
                    function DeleteMyselfDetailAreaRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeleteMyselfDetailAreaRequest cityId.
                     * @member {string} cityId
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest
                     * @instance
                     */
                    DeleteMyselfDetailAreaRequest.prototype.cityId = "";

                    /**
                     * Creates a new DeleteMyselfDetailAreaRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest} DeleteMyselfDetailAreaRequest instance
                     */
                    DeleteMyselfDetailAreaRequest.create = function create(properties) {
                        return new DeleteMyselfDetailAreaRequest(properties);
                    };

                    /**
                     * Encodes the specified DeleteMyselfDetailAreaRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaRequest} message DeleteMyselfDetailAreaRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselfDetailAreaRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cityId != null && Object.hasOwnProperty.call(message, "cityId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.cityId);
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteMyselfDetailAreaRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaRequest} message DeleteMyselfDetailAreaRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselfDetailAreaRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteMyselfDetailAreaRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest} DeleteMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselfDetailAreaRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.cityId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteMyselfDetailAreaRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest} DeleteMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselfDetailAreaRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteMyselfDetailAreaRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteMyselfDetailAreaRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cityId != null && message.hasOwnProperty("cityId"))
                            if (!$util.isString(message.cityId))
                                return "cityId: string expected";
                        return null;
                    };

                    /**
                     * Creates a DeleteMyselfDetailAreaRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest} DeleteMyselfDetailAreaRequest
                     */
                    DeleteMyselfDetailAreaRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest();
                        if (object.cityId != null)
                            message.cityId = String(object.cityId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteMyselfDetailAreaRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest} message DeleteMyselfDetailAreaRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteMyselfDetailAreaRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.cityId = "";
                        if (message.cityId != null && message.hasOwnProperty("cityId"))
                            object.cityId = message.cityId;
                        return object;
                    };

                    /**
                     * Converts this DeleteMyselfDetailAreaRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteMyselfDetailAreaRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteMyselfDetailAreaRequest;
                })();

                proto.DeleteMyselfDetailAreaResponse = (function() {

                    /**
                     * Properties of a DeleteMyselfDetailAreaResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IDeleteMyselfDetailAreaResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] DeleteMyselfDetailAreaResponse cities
                     */

                    /**
                     * Constructs a new DeleteMyselfDetailAreaResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a DeleteMyselfDetailAreaResponse.
                     * @implements IDeleteMyselfDetailAreaResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaResponse=} [properties] Properties to set
                     */
                    function DeleteMyselfDetailAreaResponse(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeleteMyselfDetailAreaResponse cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse
                     * @instance
                     */
                    DeleteMyselfDetailAreaResponse.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new DeleteMyselfDetailAreaResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse} DeleteMyselfDetailAreaResponse instance
                     */
                    DeleteMyselfDetailAreaResponse.create = function create(properties) {
                        return new DeleteMyselfDetailAreaResponse(properties);
                    };

                    /**
                     * Encodes the specified DeleteMyselfDetailAreaResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaResponse} message DeleteMyselfDetailAreaResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselfDetailAreaResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteMyselfDetailAreaResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailAreaResponse} message DeleteMyselfDetailAreaResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselfDetailAreaResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteMyselfDetailAreaResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse} DeleteMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselfDetailAreaResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteMyselfDetailAreaResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse} DeleteMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselfDetailAreaResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteMyselfDetailAreaResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteMyselfDetailAreaResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a DeleteMyselfDetailAreaResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse} DeleteMyselfDetailAreaResponse
                     */
                    DeleteMyselfDetailAreaResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteMyselfDetailAreaResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse} message DeleteMyselfDetailAreaResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteMyselfDetailAreaResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this DeleteMyselfDetailAreaResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailAreaResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteMyselfDetailAreaResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteMyselfDetailAreaResponse;
                })();

                proto.PutMyselfDetailAreaRequest = (function() {

                    /**
                     * Properties of a PutMyselfDetailAreaRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutMyselfDetailAreaRequest
                     * @property {Array.<string>|null} [cityIds] PutMyselfDetailAreaRequest cityIds
                     */

                    /**
                     * Constructs a new PutMyselfDetailAreaRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutMyselfDetailAreaRequest.
                     * @implements IPutMyselfDetailAreaRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailAreaRequest=} [properties] Properties to set
                     */
                    function PutMyselfDetailAreaRequest(properties) {
                        this.cityIds = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutMyselfDetailAreaRequest cityIds.
                     * @member {Array.<string>} cityIds
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest
                     * @instance
                     */
                    PutMyselfDetailAreaRequest.prototype.cityIds = $util.emptyArray;

                    /**
                     * Creates a new PutMyselfDetailAreaRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailAreaRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest} PutMyselfDetailAreaRequest instance
                     */
                    PutMyselfDetailAreaRequest.create = function create(properties) {
                        return new PutMyselfDetailAreaRequest(properties);
                    };

                    /**
                     * Encodes the specified PutMyselfDetailAreaRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailAreaRequest} message PutMyselfDetailAreaRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselfDetailAreaRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cityIds != null && message.cityIds.length)
                            for (var i = 0; i < message.cityIds.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cityIds[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified PutMyselfDetailAreaRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailAreaRequest} message PutMyselfDetailAreaRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselfDetailAreaRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutMyselfDetailAreaRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest} PutMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselfDetailAreaRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cityIds && message.cityIds.length))
                                    message.cityIds = [];
                                message.cityIds.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutMyselfDetailAreaRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest} PutMyselfDetailAreaRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselfDetailAreaRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutMyselfDetailAreaRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutMyselfDetailAreaRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cityIds != null && message.hasOwnProperty("cityIds")) {
                            if (!Array.isArray(message.cityIds))
                                return "cityIds: array expected";
                            for (var i = 0; i < message.cityIds.length; ++i)
                                if (!$util.isString(message.cityIds[i]))
                                    return "cityIds: string[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a PutMyselfDetailAreaRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest} PutMyselfDetailAreaRequest
                     */
                    PutMyselfDetailAreaRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest();
                        if (object.cityIds) {
                            if (!Array.isArray(object.cityIds))
                                throw TypeError(".pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest.cityIds: array expected");
                            message.cityIds = [];
                            for (var i = 0; i < object.cityIds.length; ++i)
                                message.cityIds[i] = String(object.cityIds[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutMyselfDetailAreaRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest} message PutMyselfDetailAreaRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutMyselfDetailAreaRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cityIds = [];
                        if (message.cityIds && message.cityIds.length) {
                            object.cityIds = [];
                            for (var j = 0; j < message.cityIds.length; ++j)
                                object.cityIds[j] = message.cityIds[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this PutMyselfDetailAreaRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutMyselfDetailAreaRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutMyselfDetailAreaRequest;
                })();

                proto.PutMyselfDetailAreaResponse = (function() {

                    /**
                     * Properties of a PutMyselfDetailAreaResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutMyselfDetailAreaResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] PutMyselfDetailAreaResponse cities
                     */

                    /**
                     * Constructs a new PutMyselfDetailAreaResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutMyselfDetailAreaResponse.
                     * @implements IPutMyselfDetailAreaResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailAreaResponse=} [properties] Properties to set
                     */
                    function PutMyselfDetailAreaResponse(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutMyselfDetailAreaResponse cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse
                     * @instance
                     */
                    PutMyselfDetailAreaResponse.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new PutMyselfDetailAreaResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailAreaResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse} PutMyselfDetailAreaResponse instance
                     */
                    PutMyselfDetailAreaResponse.create = function create(properties) {
                        return new PutMyselfDetailAreaResponse(properties);
                    };

                    /**
                     * Encodes the specified PutMyselfDetailAreaResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailAreaResponse} message PutMyselfDetailAreaResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselfDetailAreaResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PutMyselfDetailAreaResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselfDetailAreaResponse} message PutMyselfDetailAreaResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselfDetailAreaResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutMyselfDetailAreaResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse} PutMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselfDetailAreaResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutMyselfDetailAreaResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse} PutMyselfDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselfDetailAreaResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutMyselfDetailAreaResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutMyselfDetailAreaResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PutMyselfDetailAreaResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse} PutMyselfDetailAreaResponse
                     */
                    PutMyselfDetailAreaResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutMyselfDetailAreaResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse} message PutMyselfDetailAreaResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutMyselfDetailAreaResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PutMyselfDetailAreaResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutMyselfDetailAreaResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutMyselfDetailAreaResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutMyselfDetailAreaResponse;
                })();

                proto.GetMyselDetailInstrumentResponse = (function() {

                    /**
                     * Properties of a GetMyselDetailInstrumentResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetMyselDetailInstrumentResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IInstrument>|null} [instruments] GetMyselDetailInstrumentResponse instruments
                     */

                    /**
                     * Constructs a new GetMyselDetailInstrumentResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetMyselDetailInstrumentResponse.
                     * @implements IGetMyselDetailInstrumentResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetMyselDetailInstrumentResponse=} [properties] Properties to set
                     */
                    function GetMyselDetailInstrumentResponse(properties) {
                        this.instruments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetMyselDetailInstrumentResponse instruments.
                     * @member {Array.<pj.sakuchin.percussion.proto.IInstrument>} instruments
                     * @memberof pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse
                     * @instance
                     */
                    GetMyselDetailInstrumentResponse.prototype.instruments = $util.emptyArray;

                    /**
                     * Creates a new GetMyselDetailInstrumentResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselDetailInstrumentResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse} GetMyselDetailInstrumentResponse instance
                     */
                    GetMyselDetailInstrumentResponse.create = function create(properties) {
                        return new GetMyselDetailInstrumentResponse(properties);
                    };

                    /**
                     * Encodes the specified GetMyselDetailInstrumentResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselDetailInstrumentResponse} message GetMyselDetailInstrumentResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselDetailInstrumentResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instruments != null && message.instruments.length)
                            for (var i = 0; i < message.instruments.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Instrument.encode(message.instruments[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetMyselDetailInstrumentResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselDetailInstrumentResponse} message GetMyselDetailInstrumentResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselDetailInstrumentResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetMyselDetailInstrumentResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse} GetMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselDetailInstrumentResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.instruments && message.instruments.length))
                                    message.instruments = [];
                                message.instruments.push($root.pj.sakuchin.percussion.proto.Instrument.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetMyselDetailInstrumentResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse} GetMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselDetailInstrumentResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetMyselDetailInstrumentResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetMyselDetailInstrumentResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instruments != null && message.hasOwnProperty("instruments")) {
                            if (!Array.isArray(message.instruments))
                                return "instruments: array expected";
                            for (var i = 0; i < message.instruments.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Instrument.verify(message.instruments[i]);
                                if (error)
                                    return "instruments." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetMyselDetailInstrumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse} GetMyselDetailInstrumentResponse
                     */
                    GetMyselDetailInstrumentResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse();
                        if (object.instruments) {
                            if (!Array.isArray(object.instruments))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse.instruments: array expected");
                            message.instruments = [];
                            for (var i = 0; i < object.instruments.length; ++i) {
                                if (typeof object.instruments[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse.instruments: object expected");
                                message.instruments[i] = $root.pj.sakuchin.percussion.proto.Instrument.fromObject(object.instruments[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetMyselDetailInstrumentResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse} message GetMyselDetailInstrumentResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetMyselDetailInstrumentResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.instruments = [];
                        if (message.instruments && message.instruments.length) {
                            object.instruments = [];
                            for (var j = 0; j < message.instruments.length; ++j)
                                object.instruments[j] = $root.pj.sakuchin.percussion.proto.Instrument.toObject(message.instruments[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetMyselDetailInstrumentResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetMyselDetailInstrumentResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetMyselDetailInstrumentResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetMyselDetailInstrumentResponse;
                })();

                proto.PostMyselDetailInstrumentRequest = (function() {

                    /**
                     * Properties of a PostMyselDetailInstrumentRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostMyselDetailInstrumentRequest
                     * @property {number|null} [instrumentId] PostMyselDetailInstrumentRequest instrumentId
                     */

                    /**
                     * Constructs a new PostMyselDetailInstrumentRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostMyselDetailInstrumentRequest.
                     * @implements IPostMyselDetailInstrumentRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentRequest=} [properties] Properties to set
                     */
                    function PostMyselDetailInstrumentRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostMyselDetailInstrumentRequest instrumentId.
                     * @member {number} instrumentId
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest
                     * @instance
                     */
                    PostMyselDetailInstrumentRequest.prototype.instrumentId = 0;

                    /**
                     * Creates a new PostMyselDetailInstrumentRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest} PostMyselDetailInstrumentRequest instance
                     */
                    PostMyselDetailInstrumentRequest.create = function create(properties) {
                        return new PostMyselDetailInstrumentRequest(properties);
                    };

                    /**
                     * Encodes the specified PostMyselDetailInstrumentRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentRequest} message PostMyselDetailInstrumentRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselDetailInstrumentRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instrumentId != null && Object.hasOwnProperty.call(message, "instrumentId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.instrumentId);
                        return writer;
                    };

                    /**
                     * Encodes the specified PostMyselDetailInstrumentRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentRequest} message PostMyselDetailInstrumentRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselDetailInstrumentRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostMyselDetailInstrumentRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest} PostMyselDetailInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselDetailInstrumentRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.instrumentId = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostMyselDetailInstrumentRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest} PostMyselDetailInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselDetailInstrumentRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostMyselDetailInstrumentRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostMyselDetailInstrumentRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instrumentId != null && message.hasOwnProperty("instrumentId"))
                            if (!$util.isInteger(message.instrumentId))
                                return "instrumentId: integer expected";
                        return null;
                    };

                    /**
                     * Creates a PostMyselDetailInstrumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest} PostMyselDetailInstrumentRequest
                     */
                    PostMyselDetailInstrumentRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest();
                        if (object.instrumentId != null)
                            message.instrumentId = object.instrumentId | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostMyselDetailInstrumentRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest} message PostMyselDetailInstrumentRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostMyselDetailInstrumentRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.instrumentId = 0;
                        if (message.instrumentId != null && message.hasOwnProperty("instrumentId"))
                            object.instrumentId = message.instrumentId;
                        return object;
                    };

                    /**
                     * Converts this PostMyselDetailInstrumentRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostMyselDetailInstrumentRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostMyselDetailInstrumentRequest;
                })();

                proto.PostMyselDetailInstrumentResponse = (function() {

                    /**
                     * Properties of a PostMyselDetailInstrumentResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostMyselDetailInstrumentResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IInstrument>|null} [instruments] PostMyselDetailInstrumentResponse instruments
                     */

                    /**
                     * Constructs a new PostMyselDetailInstrumentResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostMyselDetailInstrumentResponse.
                     * @implements IPostMyselDetailInstrumentResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentResponse=} [properties] Properties to set
                     */
                    function PostMyselDetailInstrumentResponse(properties) {
                        this.instruments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostMyselDetailInstrumentResponse instruments.
                     * @member {Array.<pj.sakuchin.percussion.proto.IInstrument>} instruments
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse
                     * @instance
                     */
                    PostMyselDetailInstrumentResponse.prototype.instruments = $util.emptyArray;

                    /**
                     * Creates a new PostMyselDetailInstrumentResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse} PostMyselDetailInstrumentResponse instance
                     */
                    PostMyselDetailInstrumentResponse.create = function create(properties) {
                        return new PostMyselDetailInstrumentResponse(properties);
                    };

                    /**
                     * Encodes the specified PostMyselDetailInstrumentResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentResponse} message PostMyselDetailInstrumentResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselDetailInstrumentResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instruments != null && message.instruments.length)
                            for (var i = 0; i < message.instruments.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Instrument.encode(message.instruments[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PostMyselDetailInstrumentResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailInstrumentResponse} message PostMyselDetailInstrumentResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselDetailInstrumentResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostMyselDetailInstrumentResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse} PostMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselDetailInstrumentResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.instruments && message.instruments.length))
                                    message.instruments = [];
                                message.instruments.push($root.pj.sakuchin.percussion.proto.Instrument.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostMyselDetailInstrumentResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse} PostMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselDetailInstrumentResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostMyselDetailInstrumentResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostMyselDetailInstrumentResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instruments != null && message.hasOwnProperty("instruments")) {
                            if (!Array.isArray(message.instruments))
                                return "instruments: array expected";
                            for (var i = 0; i < message.instruments.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Instrument.verify(message.instruments[i]);
                                if (error)
                                    return "instruments." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PostMyselDetailInstrumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse} PostMyselDetailInstrumentResponse
                     */
                    PostMyselDetailInstrumentResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse();
                        if (object.instruments) {
                            if (!Array.isArray(object.instruments))
                                throw TypeError(".pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse.instruments: array expected");
                            message.instruments = [];
                            for (var i = 0; i < object.instruments.length; ++i) {
                                if (typeof object.instruments[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse.instruments: object expected");
                                message.instruments[i] = $root.pj.sakuchin.percussion.proto.Instrument.fromObject(object.instruments[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostMyselDetailInstrumentResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse} message PostMyselDetailInstrumentResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostMyselDetailInstrumentResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.instruments = [];
                        if (message.instruments && message.instruments.length) {
                            object.instruments = [];
                            for (var j = 0; j < message.instruments.length; ++j)
                                object.instruments[j] = $root.pj.sakuchin.percussion.proto.Instrument.toObject(message.instruments[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PostMyselDetailInstrumentResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailInstrumentResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostMyselDetailInstrumentResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostMyselDetailInstrumentResponse;
                })();

                proto.PutMyselDetailInstrumentRequest = (function() {

                    /**
                     * Properties of a PutMyselDetailInstrumentRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutMyselDetailInstrumentRequest
                     * @property {Array.<number>|null} [instrumentIds] PutMyselDetailInstrumentRequest instrumentIds
                     */

                    /**
                     * Constructs a new PutMyselDetailInstrumentRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutMyselDetailInstrumentRequest.
                     * @implements IPutMyselDetailInstrumentRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailInstrumentRequest=} [properties] Properties to set
                     */
                    function PutMyselDetailInstrumentRequest(properties) {
                        this.instrumentIds = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutMyselDetailInstrumentRequest instrumentIds.
                     * @member {Array.<number>} instrumentIds
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest
                     * @instance
                     */
                    PutMyselDetailInstrumentRequest.prototype.instrumentIds = $util.emptyArray;

                    /**
                     * Creates a new PutMyselDetailInstrumentRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailInstrumentRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest} PutMyselDetailInstrumentRequest instance
                     */
                    PutMyselDetailInstrumentRequest.create = function create(properties) {
                        return new PutMyselDetailInstrumentRequest(properties);
                    };

                    /**
                     * Encodes the specified PutMyselDetailInstrumentRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailInstrumentRequest} message PutMyselDetailInstrumentRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselDetailInstrumentRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instrumentIds != null && message.instrumentIds.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.instrumentIds.length; ++i)
                                writer.int32(message.instrumentIds[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified PutMyselDetailInstrumentRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailInstrumentRequest} message PutMyselDetailInstrumentRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselDetailInstrumentRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutMyselDetailInstrumentRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest} PutMyselDetailInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselDetailInstrumentRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.instrumentIds && message.instrumentIds.length))
                                    message.instrumentIds = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.instrumentIds.push(reader.int32());
                                } else
                                    message.instrumentIds.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutMyselDetailInstrumentRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest} PutMyselDetailInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselDetailInstrumentRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutMyselDetailInstrumentRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutMyselDetailInstrumentRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instrumentIds != null && message.hasOwnProperty("instrumentIds")) {
                            if (!Array.isArray(message.instrumentIds))
                                return "instrumentIds: array expected";
                            for (var i = 0; i < message.instrumentIds.length; ++i)
                                if (!$util.isInteger(message.instrumentIds[i]))
                                    return "instrumentIds: integer[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a PutMyselDetailInstrumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest} PutMyselDetailInstrumentRequest
                     */
                    PutMyselDetailInstrumentRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest();
                        if (object.instrumentIds) {
                            if (!Array.isArray(object.instrumentIds))
                                throw TypeError(".pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest.instrumentIds: array expected");
                            message.instrumentIds = [];
                            for (var i = 0; i < object.instrumentIds.length; ++i)
                                message.instrumentIds[i] = object.instrumentIds[i] | 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutMyselDetailInstrumentRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest} message PutMyselDetailInstrumentRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutMyselDetailInstrumentRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.instrumentIds = [];
                        if (message.instrumentIds && message.instrumentIds.length) {
                            object.instrumentIds = [];
                            for (var j = 0; j < message.instrumentIds.length; ++j)
                                object.instrumentIds[j] = message.instrumentIds[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this PutMyselDetailInstrumentRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutMyselDetailInstrumentRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutMyselDetailInstrumentRequest;
                })();

                proto.PutMyselDetailInstrumentResponse = (function() {

                    /**
                     * Properties of a PutMyselDetailInstrumentResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutMyselDetailInstrumentResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IInstrument>|null} [instruments] PutMyselDetailInstrumentResponse instruments
                     */

                    /**
                     * Constructs a new PutMyselDetailInstrumentResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutMyselDetailInstrumentResponse.
                     * @implements IPutMyselDetailInstrumentResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailInstrumentResponse=} [properties] Properties to set
                     */
                    function PutMyselDetailInstrumentResponse(properties) {
                        this.instruments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutMyselDetailInstrumentResponse instruments.
                     * @member {Array.<pj.sakuchin.percussion.proto.IInstrument>} instruments
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse
                     * @instance
                     */
                    PutMyselDetailInstrumentResponse.prototype.instruments = $util.emptyArray;

                    /**
                     * Creates a new PutMyselDetailInstrumentResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailInstrumentResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse} PutMyselDetailInstrumentResponse instance
                     */
                    PutMyselDetailInstrumentResponse.create = function create(properties) {
                        return new PutMyselDetailInstrumentResponse(properties);
                    };

                    /**
                     * Encodes the specified PutMyselDetailInstrumentResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailInstrumentResponse} message PutMyselDetailInstrumentResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselDetailInstrumentResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instruments != null && message.instruments.length)
                            for (var i = 0; i < message.instruments.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Instrument.encode(message.instruments[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PutMyselDetailInstrumentResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailInstrumentResponse} message PutMyselDetailInstrumentResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselDetailInstrumentResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutMyselDetailInstrumentResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse} PutMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselDetailInstrumentResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.instruments && message.instruments.length))
                                    message.instruments = [];
                                message.instruments.push($root.pj.sakuchin.percussion.proto.Instrument.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutMyselDetailInstrumentResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse} PutMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselDetailInstrumentResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutMyselDetailInstrumentResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutMyselDetailInstrumentResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instruments != null && message.hasOwnProperty("instruments")) {
                            if (!Array.isArray(message.instruments))
                                return "instruments: array expected";
                            for (var i = 0; i < message.instruments.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Instrument.verify(message.instruments[i]);
                                if (error)
                                    return "instruments." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PutMyselDetailInstrumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse} PutMyselDetailInstrumentResponse
                     */
                    PutMyselDetailInstrumentResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse();
                        if (object.instruments) {
                            if (!Array.isArray(object.instruments))
                                throw TypeError(".pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse.instruments: array expected");
                            message.instruments = [];
                            for (var i = 0; i < object.instruments.length; ++i) {
                                if (typeof object.instruments[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse.instruments: object expected");
                                message.instruments[i] = $root.pj.sakuchin.percussion.proto.Instrument.fromObject(object.instruments[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutMyselDetailInstrumentResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse} message PutMyselDetailInstrumentResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutMyselDetailInstrumentResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.instruments = [];
                        if (message.instruments && message.instruments.length) {
                            object.instruments = [];
                            for (var j = 0; j < message.instruments.length; ++j)
                                object.instruments[j] = $root.pj.sakuchin.percussion.proto.Instrument.toObject(message.instruments[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PutMyselDetailInstrumentResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailInstrumentResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutMyselDetailInstrumentResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutMyselDetailInstrumentResponse;
                })();

                proto.DeleteMyselDetailInstrumentRequest = (function() {

                    /**
                     * Properties of a DeleteMyselDetailInstrumentRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IDeleteMyselDetailInstrumentRequest
                     * @property {number|null} [instrumentId] DeleteMyselDetailInstrumentRequest instrumentId
                     */

                    /**
                     * Constructs a new DeleteMyselDetailInstrumentRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a DeleteMyselDetailInstrumentRequest.
                     * @implements IDeleteMyselDetailInstrumentRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentRequest=} [properties] Properties to set
                     */
                    function DeleteMyselDetailInstrumentRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeleteMyselDetailInstrumentRequest instrumentId.
                     * @member {number} instrumentId
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest
                     * @instance
                     */
                    DeleteMyselDetailInstrumentRequest.prototype.instrumentId = 0;

                    /**
                     * Creates a new DeleteMyselDetailInstrumentRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest} DeleteMyselDetailInstrumentRequest instance
                     */
                    DeleteMyselDetailInstrumentRequest.create = function create(properties) {
                        return new DeleteMyselDetailInstrumentRequest(properties);
                    };

                    /**
                     * Encodes the specified DeleteMyselDetailInstrumentRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentRequest} message DeleteMyselDetailInstrumentRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselDetailInstrumentRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instrumentId != null && Object.hasOwnProperty.call(message, "instrumentId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.instrumentId);
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteMyselDetailInstrumentRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentRequest} message DeleteMyselDetailInstrumentRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselDetailInstrumentRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteMyselDetailInstrumentRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest} DeleteMyselDetailInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselDetailInstrumentRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.instrumentId = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteMyselDetailInstrumentRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest} DeleteMyselDetailInstrumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselDetailInstrumentRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteMyselDetailInstrumentRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteMyselDetailInstrumentRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instrumentId != null && message.hasOwnProperty("instrumentId"))
                            if (!$util.isInteger(message.instrumentId))
                                return "instrumentId: integer expected";
                        return null;
                    };

                    /**
                     * Creates a DeleteMyselDetailInstrumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest} DeleteMyselDetailInstrumentRequest
                     */
                    DeleteMyselDetailInstrumentRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest();
                        if (object.instrumentId != null)
                            message.instrumentId = object.instrumentId | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteMyselDetailInstrumentRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest} message DeleteMyselDetailInstrumentRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteMyselDetailInstrumentRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.instrumentId = 0;
                        if (message.instrumentId != null && message.hasOwnProperty("instrumentId"))
                            object.instrumentId = message.instrumentId;
                        return object;
                    };

                    /**
                     * Converts this DeleteMyselDetailInstrumentRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteMyselDetailInstrumentRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteMyselDetailInstrumentRequest;
                })();

                proto.DeleteMyselDetailInstrumentResponse = (function() {

                    /**
                     * Properties of a DeleteMyselDetailInstrumentResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IDeleteMyselDetailInstrumentResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IInstrument>|null} [instruments] DeleteMyselDetailInstrumentResponse instruments
                     */

                    /**
                     * Constructs a new DeleteMyselDetailInstrumentResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a DeleteMyselDetailInstrumentResponse.
                     * @implements IDeleteMyselDetailInstrumentResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentResponse=} [properties] Properties to set
                     */
                    function DeleteMyselDetailInstrumentResponse(properties) {
                        this.instruments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeleteMyselDetailInstrumentResponse instruments.
                     * @member {Array.<pj.sakuchin.percussion.proto.IInstrument>} instruments
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse
                     * @instance
                     */
                    DeleteMyselDetailInstrumentResponse.prototype.instruments = $util.emptyArray;

                    /**
                     * Creates a new DeleteMyselDetailInstrumentResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse} DeleteMyselDetailInstrumentResponse instance
                     */
                    DeleteMyselDetailInstrumentResponse.create = function create(properties) {
                        return new DeleteMyselDetailInstrumentResponse(properties);
                    };

                    /**
                     * Encodes the specified DeleteMyselDetailInstrumentResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentResponse} message DeleteMyselDetailInstrumentResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselDetailInstrumentResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instruments != null && message.instruments.length)
                            for (var i = 0; i < message.instruments.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Instrument.encode(message.instruments[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteMyselDetailInstrumentResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailInstrumentResponse} message DeleteMyselDetailInstrumentResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselDetailInstrumentResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteMyselDetailInstrumentResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse} DeleteMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselDetailInstrumentResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.instruments && message.instruments.length))
                                    message.instruments = [];
                                message.instruments.push($root.pj.sakuchin.percussion.proto.Instrument.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteMyselDetailInstrumentResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse} DeleteMyselDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselDetailInstrumentResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteMyselDetailInstrumentResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteMyselDetailInstrumentResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instruments != null && message.hasOwnProperty("instruments")) {
                            if (!Array.isArray(message.instruments))
                                return "instruments: array expected";
                            for (var i = 0; i < message.instruments.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Instrument.verify(message.instruments[i]);
                                if (error)
                                    return "instruments." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a DeleteMyselDetailInstrumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse} DeleteMyselDetailInstrumentResponse
                     */
                    DeleteMyselDetailInstrumentResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse();
                        if (object.instruments) {
                            if (!Array.isArray(object.instruments))
                                throw TypeError(".pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse.instruments: array expected");
                            message.instruments = [];
                            for (var i = 0; i < object.instruments.length; ++i) {
                                if (typeof object.instruments[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse.instruments: object expected");
                                message.instruments[i] = $root.pj.sakuchin.percussion.proto.Instrument.fromObject(object.instruments[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteMyselDetailInstrumentResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse} message DeleteMyselDetailInstrumentResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteMyselDetailInstrumentResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.instruments = [];
                        if (message.instruments && message.instruments.length) {
                            object.instruments = [];
                            for (var j = 0; j < message.instruments.length; ++j)
                                object.instruments[j] = $root.pj.sakuchin.percussion.proto.Instrument.toObject(message.instruments[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this DeleteMyselDetailInstrumentResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailInstrumentResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteMyselDetailInstrumentResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteMyselDetailInstrumentResponse;
                })();

                proto.GetMyselfDetailStudioResponse = (function() {

                    /**
                     * Properties of a GetMyselfDetailStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetMyselfDetailStudioResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IStudio>|null} [studios] GetMyselfDetailStudioResponse studios
                     */

                    /**
                     * Constructs a new GetMyselfDetailStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetMyselfDetailStudioResponse.
                     * @implements IGetMyselfDetailStudioResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailStudioResponse=} [properties] Properties to set
                     */
                    function GetMyselfDetailStudioResponse(properties) {
                        this.studios = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetMyselfDetailStudioResponse studios.
                     * @member {Array.<pj.sakuchin.percussion.proto.IStudio>} studios
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse
                     * @instance
                     */
                    GetMyselfDetailStudioResponse.prototype.studios = $util.emptyArray;

                    /**
                     * Creates a new GetMyselfDetailStudioResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailStudioResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse} GetMyselfDetailStudioResponse instance
                     */
                    GetMyselfDetailStudioResponse.create = function create(properties) {
                        return new GetMyselfDetailStudioResponse(properties);
                    };

                    /**
                     * Encodes the specified GetMyselfDetailStudioResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailStudioResponse} message GetMyselfDetailStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselfDetailStudioResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.studios != null && message.studios.length)
                            for (var i = 0; i < message.studios.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Studio.encode(message.studios[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetMyselfDetailStudioResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailStudioResponse} message GetMyselfDetailStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselfDetailStudioResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetMyselfDetailStudioResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse} GetMyselfDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselfDetailStudioResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.studios && message.studios.length))
                                    message.studios = [];
                                message.studios.push($root.pj.sakuchin.percussion.proto.Studio.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetMyselfDetailStudioResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse} GetMyselfDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselfDetailStudioResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetMyselfDetailStudioResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetMyselfDetailStudioResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.studios != null && message.hasOwnProperty("studios")) {
                            if (!Array.isArray(message.studios))
                                return "studios: array expected";
                            for (var i = 0; i < message.studios.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Studio.verify(message.studios[i]);
                                if (error)
                                    return "studios." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetMyselfDetailStudioResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse} GetMyselfDetailStudioResponse
                     */
                    GetMyselfDetailStudioResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse();
                        if (object.studios) {
                            if (!Array.isArray(object.studios))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse.studios: array expected");
                            message.studios = [];
                            for (var i = 0; i < object.studios.length; ++i) {
                                if (typeof object.studios[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse.studios: object expected");
                                message.studios[i] = $root.pj.sakuchin.percussion.proto.Studio.fromObject(object.studios[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetMyselfDetailStudioResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse} message GetMyselfDetailStudioResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetMyselfDetailStudioResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.studios = [];
                        if (message.studios && message.studios.length) {
                            object.studios = [];
                            for (var j = 0; j < message.studios.length; ++j)
                                object.studios[j] = $root.pj.sakuchin.percussion.proto.Studio.toObject(message.studios[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetMyselfDetailStudioResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailStudioResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetMyselfDetailStudioResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetMyselfDetailStudioResponse;
                })();

                proto.PostMyselDetailStudioRequest = (function() {

                    /**
                     * Properties of a PostMyselDetailStudioRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostMyselDetailStudioRequest
                     * @property {number|null} [studioId] PostMyselDetailStudioRequest studioId
                     */

                    /**
                     * Constructs a new PostMyselDetailStudioRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostMyselDetailStudioRequest.
                     * @implements IPostMyselDetailStudioRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailStudioRequest=} [properties] Properties to set
                     */
                    function PostMyselDetailStudioRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostMyselDetailStudioRequest studioId.
                     * @member {number} studioId
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest
                     * @instance
                     */
                    PostMyselDetailStudioRequest.prototype.studioId = 0;

                    /**
                     * Creates a new PostMyselDetailStudioRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailStudioRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest} PostMyselDetailStudioRequest instance
                     */
                    PostMyselDetailStudioRequest.create = function create(properties) {
                        return new PostMyselDetailStudioRequest(properties);
                    };

                    /**
                     * Encodes the specified PostMyselDetailStudioRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailStudioRequest} message PostMyselDetailStudioRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselDetailStudioRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.studioId != null && Object.hasOwnProperty.call(message, "studioId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.studioId);
                        return writer;
                    };

                    /**
                     * Encodes the specified PostMyselDetailStudioRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailStudioRequest} message PostMyselDetailStudioRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselDetailStudioRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostMyselDetailStudioRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest} PostMyselDetailStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselDetailStudioRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.studioId = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostMyselDetailStudioRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest} PostMyselDetailStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselDetailStudioRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostMyselDetailStudioRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostMyselDetailStudioRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.studioId != null && message.hasOwnProperty("studioId"))
                            if (!$util.isInteger(message.studioId))
                                return "studioId: integer expected";
                        return null;
                    };

                    /**
                     * Creates a PostMyselDetailStudioRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest} PostMyselDetailStudioRequest
                     */
                    PostMyselDetailStudioRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest();
                        if (object.studioId != null)
                            message.studioId = object.studioId | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostMyselDetailStudioRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest} message PostMyselDetailStudioRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostMyselDetailStudioRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.studioId = 0;
                        if (message.studioId != null && message.hasOwnProperty("studioId"))
                            object.studioId = message.studioId;
                        return object;
                    };

                    /**
                     * Converts this PostMyselDetailStudioRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostMyselDetailStudioRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostMyselDetailStudioRequest;
                })();

                proto.PostMyselDetailStudioResponse = (function() {

                    /**
                     * Properties of a PostMyselDetailStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostMyselDetailStudioResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IStudio>|null} [studios] PostMyselDetailStudioResponse studios
                     */

                    /**
                     * Constructs a new PostMyselDetailStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostMyselDetailStudioResponse.
                     * @implements IPostMyselDetailStudioResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailStudioResponse=} [properties] Properties to set
                     */
                    function PostMyselDetailStudioResponse(properties) {
                        this.studios = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostMyselDetailStudioResponse studios.
                     * @member {Array.<pj.sakuchin.percussion.proto.IStudio>} studios
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse
                     * @instance
                     */
                    PostMyselDetailStudioResponse.prototype.studios = $util.emptyArray;

                    /**
                     * Creates a new PostMyselDetailStudioResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailStudioResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse} PostMyselDetailStudioResponse instance
                     */
                    PostMyselDetailStudioResponse.create = function create(properties) {
                        return new PostMyselDetailStudioResponse(properties);
                    };

                    /**
                     * Encodes the specified PostMyselDetailStudioResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailStudioResponse} message PostMyselDetailStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselDetailStudioResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.studios != null && message.studios.length)
                            for (var i = 0; i < message.studios.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Studio.encode(message.studios[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PostMyselDetailStudioResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselDetailStudioResponse} message PostMyselDetailStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselDetailStudioResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostMyselDetailStudioResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse} PostMyselDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselDetailStudioResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.studios && message.studios.length))
                                    message.studios = [];
                                message.studios.push($root.pj.sakuchin.percussion.proto.Studio.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostMyselDetailStudioResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse} PostMyselDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselDetailStudioResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostMyselDetailStudioResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostMyselDetailStudioResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.studios != null && message.hasOwnProperty("studios")) {
                            if (!Array.isArray(message.studios))
                                return "studios: array expected";
                            for (var i = 0; i < message.studios.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Studio.verify(message.studios[i]);
                                if (error)
                                    return "studios." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PostMyselDetailStudioResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse} PostMyselDetailStudioResponse
                     */
                    PostMyselDetailStudioResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse();
                        if (object.studios) {
                            if (!Array.isArray(object.studios))
                                throw TypeError(".pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse.studios: array expected");
                            message.studios = [];
                            for (var i = 0; i < object.studios.length; ++i) {
                                if (typeof object.studios[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse.studios: object expected");
                                message.studios[i] = $root.pj.sakuchin.percussion.proto.Studio.fromObject(object.studios[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostMyselDetailStudioResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse} message PostMyselDetailStudioResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostMyselDetailStudioResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.studios = [];
                        if (message.studios && message.studios.length) {
                            object.studios = [];
                            for (var j = 0; j < message.studios.length; ++j)
                                object.studios[j] = $root.pj.sakuchin.percussion.proto.Studio.toObject(message.studios[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PostMyselDetailStudioResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostMyselDetailStudioResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostMyselDetailStudioResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostMyselDetailStudioResponse;
                })();

                proto.PutMyselDetailStudioRequest = (function() {

                    /**
                     * Properties of a PutMyselDetailStudioRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutMyselDetailStudioRequest
                     * @property {Array.<number>|null} [studioIds] PutMyselDetailStudioRequest studioIds
                     */

                    /**
                     * Constructs a new PutMyselDetailStudioRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutMyselDetailStudioRequest.
                     * @implements IPutMyselDetailStudioRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailStudioRequest=} [properties] Properties to set
                     */
                    function PutMyselDetailStudioRequest(properties) {
                        this.studioIds = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutMyselDetailStudioRequest studioIds.
                     * @member {Array.<number>} studioIds
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest
                     * @instance
                     */
                    PutMyselDetailStudioRequest.prototype.studioIds = $util.emptyArray;

                    /**
                     * Creates a new PutMyselDetailStudioRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailStudioRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest} PutMyselDetailStudioRequest instance
                     */
                    PutMyselDetailStudioRequest.create = function create(properties) {
                        return new PutMyselDetailStudioRequest(properties);
                    };

                    /**
                     * Encodes the specified PutMyselDetailStudioRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailStudioRequest} message PutMyselDetailStudioRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselDetailStudioRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.studioIds != null && message.studioIds.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.studioIds.length; ++i)
                                writer.int32(message.studioIds[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified PutMyselDetailStudioRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailStudioRequest} message PutMyselDetailStudioRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselDetailStudioRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutMyselDetailStudioRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest} PutMyselDetailStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselDetailStudioRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.studioIds && message.studioIds.length))
                                    message.studioIds = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.studioIds.push(reader.int32());
                                } else
                                    message.studioIds.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutMyselDetailStudioRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest} PutMyselDetailStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselDetailStudioRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutMyselDetailStudioRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutMyselDetailStudioRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.studioIds != null && message.hasOwnProperty("studioIds")) {
                            if (!Array.isArray(message.studioIds))
                                return "studioIds: array expected";
                            for (var i = 0; i < message.studioIds.length; ++i)
                                if (!$util.isInteger(message.studioIds[i]))
                                    return "studioIds: integer[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a PutMyselDetailStudioRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest} PutMyselDetailStudioRequest
                     */
                    PutMyselDetailStudioRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest();
                        if (object.studioIds) {
                            if (!Array.isArray(object.studioIds))
                                throw TypeError(".pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest.studioIds: array expected");
                            message.studioIds = [];
                            for (var i = 0; i < object.studioIds.length; ++i)
                                message.studioIds[i] = object.studioIds[i] | 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutMyselDetailStudioRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest} message PutMyselDetailStudioRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutMyselDetailStudioRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.studioIds = [];
                        if (message.studioIds && message.studioIds.length) {
                            object.studioIds = [];
                            for (var j = 0; j < message.studioIds.length; ++j)
                                object.studioIds[j] = message.studioIds[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this PutMyselDetailStudioRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutMyselDetailStudioRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutMyselDetailStudioRequest;
                })();

                proto.PutMyselDetailStudioResponse = (function() {

                    /**
                     * Properties of a PutMyselDetailStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutMyselDetailStudioResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IInstrument>|null} [studios] PutMyselDetailStudioResponse studios
                     */

                    /**
                     * Constructs a new PutMyselDetailStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutMyselDetailStudioResponse.
                     * @implements IPutMyselDetailStudioResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailStudioResponse=} [properties] Properties to set
                     */
                    function PutMyselDetailStudioResponse(properties) {
                        this.studios = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutMyselDetailStudioResponse studios.
                     * @member {Array.<pj.sakuchin.percussion.proto.IInstrument>} studios
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse
                     * @instance
                     */
                    PutMyselDetailStudioResponse.prototype.studios = $util.emptyArray;

                    /**
                     * Creates a new PutMyselDetailStudioResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailStudioResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse} PutMyselDetailStudioResponse instance
                     */
                    PutMyselDetailStudioResponse.create = function create(properties) {
                        return new PutMyselDetailStudioResponse(properties);
                    };

                    /**
                     * Encodes the specified PutMyselDetailStudioResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailStudioResponse} message PutMyselDetailStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselDetailStudioResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.studios != null && message.studios.length)
                            for (var i = 0; i < message.studios.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Instrument.encode(message.studios[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PutMyselDetailStudioResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutMyselDetailStudioResponse} message PutMyselDetailStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutMyselDetailStudioResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutMyselDetailStudioResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse} PutMyselDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselDetailStudioResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.studios && message.studios.length))
                                    message.studios = [];
                                message.studios.push($root.pj.sakuchin.percussion.proto.Instrument.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutMyselDetailStudioResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse} PutMyselDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutMyselDetailStudioResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutMyselDetailStudioResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutMyselDetailStudioResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.studios != null && message.hasOwnProperty("studios")) {
                            if (!Array.isArray(message.studios))
                                return "studios: array expected";
                            for (var i = 0; i < message.studios.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Instrument.verify(message.studios[i]);
                                if (error)
                                    return "studios." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PutMyselDetailStudioResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse} PutMyselDetailStudioResponse
                     */
                    PutMyselDetailStudioResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse();
                        if (object.studios) {
                            if (!Array.isArray(object.studios))
                                throw TypeError(".pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse.studios: array expected");
                            message.studios = [];
                            for (var i = 0; i < object.studios.length; ++i) {
                                if (typeof object.studios[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse.studios: object expected");
                                message.studios[i] = $root.pj.sakuchin.percussion.proto.Instrument.fromObject(object.studios[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutMyselDetailStudioResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse} message PutMyselDetailStudioResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutMyselDetailStudioResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.studios = [];
                        if (message.studios && message.studios.length) {
                            object.studios = [];
                            for (var j = 0; j < message.studios.length; ++j)
                                object.studios[j] = $root.pj.sakuchin.percussion.proto.Instrument.toObject(message.studios[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PutMyselDetailStudioResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutMyselDetailStudioResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutMyselDetailStudioResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutMyselDetailStudioResponse;
                })();

                proto.DeleteMyselfDetailStudioRequest = (function() {

                    /**
                     * Properties of a DeleteMyselfDetailStudioRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IDeleteMyselfDetailStudioRequest
                     * @property {number|null} [studioId] DeleteMyselfDetailStudioRequest studioId
                     */

                    /**
                     * Constructs a new DeleteMyselfDetailStudioRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a DeleteMyselfDetailStudioRequest.
                     * @implements IDeleteMyselfDetailStudioRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailStudioRequest=} [properties] Properties to set
                     */
                    function DeleteMyselfDetailStudioRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeleteMyselfDetailStudioRequest studioId.
                     * @member {number} studioId
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest
                     * @instance
                     */
                    DeleteMyselfDetailStudioRequest.prototype.studioId = 0;

                    /**
                     * Creates a new DeleteMyselfDetailStudioRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailStudioRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest} DeleteMyselfDetailStudioRequest instance
                     */
                    DeleteMyselfDetailStudioRequest.create = function create(properties) {
                        return new DeleteMyselfDetailStudioRequest(properties);
                    };

                    /**
                     * Encodes the specified DeleteMyselfDetailStudioRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailStudioRequest} message DeleteMyselfDetailStudioRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselfDetailStudioRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.studioId != null && Object.hasOwnProperty.call(message, "studioId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.studioId);
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteMyselfDetailStudioRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailStudioRequest} message DeleteMyselfDetailStudioRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselfDetailStudioRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteMyselfDetailStudioRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest} DeleteMyselfDetailStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselfDetailStudioRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.studioId = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteMyselfDetailStudioRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest} DeleteMyselfDetailStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselfDetailStudioRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteMyselfDetailStudioRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteMyselfDetailStudioRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.studioId != null && message.hasOwnProperty("studioId"))
                            if (!$util.isInteger(message.studioId))
                                return "studioId: integer expected";
                        return null;
                    };

                    /**
                     * Creates a DeleteMyselfDetailStudioRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest} DeleteMyselfDetailStudioRequest
                     */
                    DeleteMyselfDetailStudioRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest();
                        if (object.studioId != null)
                            message.studioId = object.studioId | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteMyselfDetailStudioRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest} message DeleteMyselfDetailStudioRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteMyselfDetailStudioRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.studioId = 0;
                        if (message.studioId != null && message.hasOwnProperty("studioId"))
                            object.studioId = message.studioId;
                        return object;
                    };

                    /**
                     * Converts this DeleteMyselfDetailStudioRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailStudioRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteMyselfDetailStudioRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteMyselfDetailStudioRequest;
                })();

                proto.DeleteMyselDetailStudioResponse = (function() {

                    /**
                     * Properties of a DeleteMyselDetailStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IDeleteMyselDetailStudioResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IStudio>|null} [studios] DeleteMyselDetailStudioResponse studios
                     */

                    /**
                     * Constructs a new DeleteMyselDetailStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a DeleteMyselDetailStudioResponse.
                     * @implements IDeleteMyselDetailStudioResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailStudioResponse=} [properties] Properties to set
                     */
                    function DeleteMyselDetailStudioResponse(properties) {
                        this.studios = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeleteMyselDetailStudioResponse studios.
                     * @member {Array.<pj.sakuchin.percussion.proto.IStudio>} studios
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse
                     * @instance
                     */
                    DeleteMyselDetailStudioResponse.prototype.studios = $util.emptyArray;

                    /**
                     * Creates a new DeleteMyselDetailStudioResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailStudioResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse} DeleteMyselDetailStudioResponse instance
                     */
                    DeleteMyselDetailStudioResponse.create = function create(properties) {
                        return new DeleteMyselDetailStudioResponse(properties);
                    };

                    /**
                     * Encodes the specified DeleteMyselDetailStudioResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailStudioResponse} message DeleteMyselDetailStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselDetailStudioResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.studios != null && message.studios.length)
                            for (var i = 0; i < message.studios.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Studio.encode(message.studios[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteMyselDetailStudioResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselDetailStudioResponse} message DeleteMyselDetailStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselDetailStudioResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteMyselDetailStudioResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse} DeleteMyselDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselDetailStudioResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.studios && message.studios.length))
                                    message.studios = [];
                                message.studios.push($root.pj.sakuchin.percussion.proto.Studio.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteMyselDetailStudioResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse} DeleteMyselDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselDetailStudioResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteMyselDetailStudioResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteMyselDetailStudioResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.studios != null && message.hasOwnProperty("studios")) {
                            if (!Array.isArray(message.studios))
                                return "studios: array expected";
                            for (var i = 0; i < message.studios.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Studio.verify(message.studios[i]);
                                if (error)
                                    return "studios." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a DeleteMyselDetailStudioResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse} DeleteMyselDetailStudioResponse
                     */
                    DeleteMyselDetailStudioResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse();
                        if (object.studios) {
                            if (!Array.isArray(object.studios))
                                throw TypeError(".pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse.studios: array expected");
                            message.studios = [];
                            for (var i = 0; i < object.studios.length; ++i) {
                                if (typeof object.studios[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse.studios: object expected");
                                message.studios[i] = $root.pj.sakuchin.percussion.proto.Studio.fromObject(object.studios[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteMyselDetailStudioResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse} message DeleteMyselDetailStudioResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteMyselDetailStudioResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.studios = [];
                        if (message.studios && message.studios.length) {
                            object.studios = [];
                            for (var j = 0; j < message.studios.length; ++j)
                                object.studios[j] = $root.pj.sakuchin.percussion.proto.Studio.toObject(message.studios[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this DeleteMyselDetailStudioResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselDetailStudioResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteMyselDetailStudioResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteMyselDetailStudioResponse;
                })();

                proto.GetMyselfDetailFollowersResponse = (function() {

                    /**
                     * Properties of a GetMyselfDetailFollowersResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetMyselfDetailFollowersResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IPlayer>|null} [players] GetMyselfDetailFollowersResponse players
                     */

                    /**
                     * Constructs a new GetMyselfDetailFollowersResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetMyselfDetailFollowersResponse.
                     * @implements IGetMyselfDetailFollowersResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailFollowersResponse=} [properties] Properties to set
                     */
                    function GetMyselfDetailFollowersResponse(properties) {
                        this.players = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetMyselfDetailFollowersResponse players.
                     * @member {Array.<pj.sakuchin.percussion.proto.IPlayer>} players
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse
                     * @instance
                     */
                    GetMyselfDetailFollowersResponse.prototype.players = $util.emptyArray;

                    /**
                     * Creates a new GetMyselfDetailFollowersResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailFollowersResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse} GetMyselfDetailFollowersResponse instance
                     */
                    GetMyselfDetailFollowersResponse.create = function create(properties) {
                        return new GetMyselfDetailFollowersResponse(properties);
                    };

                    /**
                     * Encodes the specified GetMyselfDetailFollowersResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailFollowersResponse} message GetMyselfDetailFollowersResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselfDetailFollowersResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.players != null && message.players.length)
                            for (var i = 0; i < message.players.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Player.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetMyselfDetailFollowersResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailFollowersResponse} message GetMyselfDetailFollowersResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselfDetailFollowersResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetMyselfDetailFollowersResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse} GetMyselfDetailFollowersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselfDetailFollowersResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.players && message.players.length))
                                    message.players = [];
                                message.players.push($root.pj.sakuchin.percussion.proto.Player.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetMyselfDetailFollowersResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse} GetMyselfDetailFollowersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselfDetailFollowersResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetMyselfDetailFollowersResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetMyselfDetailFollowersResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.players != null && message.hasOwnProperty("players")) {
                            if (!Array.isArray(message.players))
                                return "players: array expected";
                            for (var i = 0; i < message.players.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Player.verify(message.players[i]);
                                if (error)
                                    return "players." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetMyselfDetailFollowersResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse} GetMyselfDetailFollowersResponse
                     */
                    GetMyselfDetailFollowersResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse();
                        if (object.players) {
                            if (!Array.isArray(object.players))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse.players: array expected");
                            message.players = [];
                            for (var i = 0; i < object.players.length; ++i) {
                                if (typeof object.players[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse.players: object expected");
                                message.players[i] = $root.pj.sakuchin.percussion.proto.Player.fromObject(object.players[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetMyselfDetailFollowersResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse} message GetMyselfDetailFollowersResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetMyselfDetailFollowersResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.players = [];
                        if (message.players && message.players.length) {
                            object.players = [];
                            for (var j = 0; j < message.players.length; ++j)
                                object.players[j] = $root.pj.sakuchin.percussion.proto.Player.toObject(message.players[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetMyselfDetailFollowersResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFollowersResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetMyselfDetailFollowersResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetMyselfDetailFollowersResponse;
                })();

                proto.GetMyselfDetailFolloweesResponse = (function() {

                    /**
                     * Properties of a GetMyselfDetailFolloweesResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetMyselfDetailFolloweesResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IPlayer>|null} [players] GetMyselfDetailFolloweesResponse players
                     */

                    /**
                     * Constructs a new GetMyselfDetailFolloweesResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetMyselfDetailFolloweesResponse.
                     * @implements IGetMyselfDetailFolloweesResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailFolloweesResponse=} [properties] Properties to set
                     */
                    function GetMyselfDetailFolloweesResponse(properties) {
                        this.players = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetMyselfDetailFolloweesResponse players.
                     * @member {Array.<pj.sakuchin.percussion.proto.IPlayer>} players
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse
                     * @instance
                     */
                    GetMyselfDetailFolloweesResponse.prototype.players = $util.emptyArray;

                    /**
                     * Creates a new GetMyselfDetailFolloweesResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailFolloweesResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse} GetMyselfDetailFolloweesResponse instance
                     */
                    GetMyselfDetailFolloweesResponse.create = function create(properties) {
                        return new GetMyselfDetailFolloweesResponse(properties);
                    };

                    /**
                     * Encodes the specified GetMyselfDetailFolloweesResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailFolloweesResponse} message GetMyselfDetailFolloweesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselfDetailFolloweesResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.players != null && message.players.length)
                            for (var i = 0; i < message.players.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Player.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetMyselfDetailFolloweesResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetMyselfDetailFolloweesResponse} message GetMyselfDetailFolloweesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMyselfDetailFolloweesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetMyselfDetailFolloweesResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse} GetMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselfDetailFolloweesResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.players && message.players.length))
                                    message.players = [];
                                message.players.push($root.pj.sakuchin.percussion.proto.Player.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetMyselfDetailFolloweesResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse} GetMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMyselfDetailFolloweesResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetMyselfDetailFolloweesResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetMyselfDetailFolloweesResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.players != null && message.hasOwnProperty("players")) {
                            if (!Array.isArray(message.players))
                                return "players: array expected";
                            for (var i = 0; i < message.players.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Player.verify(message.players[i]);
                                if (error)
                                    return "players." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetMyselfDetailFolloweesResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse} GetMyselfDetailFolloweesResponse
                     */
                    GetMyselfDetailFolloweesResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse();
                        if (object.players) {
                            if (!Array.isArray(object.players))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse.players: array expected");
                            message.players = [];
                            for (var i = 0; i < object.players.length; ++i) {
                                if (typeof object.players[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse.players: object expected");
                                message.players[i] = $root.pj.sakuchin.percussion.proto.Player.fromObject(object.players[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetMyselfDetailFolloweesResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse} message GetMyselfDetailFolloweesResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetMyselfDetailFolloweesResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.players = [];
                        if (message.players && message.players.length) {
                            object.players = [];
                            for (var j = 0; j < message.players.length; ++j)
                                object.players[j] = $root.pj.sakuchin.percussion.proto.Player.toObject(message.players[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetMyselfDetailFolloweesResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetMyselfDetailFolloweesResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetMyselfDetailFolloweesResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetMyselfDetailFolloweesResponse;
                })();

                proto.PostMyselfDetailFolloweeRequest = (function() {

                    /**
                     * Properties of a PostMyselfDetailFolloweeRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostMyselfDetailFolloweeRequest
                     * @property {string|null} [playerId] PostMyselfDetailFolloweeRequest playerId
                     */

                    /**
                     * Constructs a new PostMyselfDetailFolloweeRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostMyselfDetailFolloweeRequest.
                     * @implements IPostMyselfDetailFolloweeRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweeRequest=} [properties] Properties to set
                     */
                    function PostMyselfDetailFolloweeRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostMyselfDetailFolloweeRequest playerId.
                     * @member {string} playerId
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest
                     * @instance
                     */
                    PostMyselfDetailFolloweeRequest.prototype.playerId = "";

                    /**
                     * Creates a new PostMyselfDetailFolloweeRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweeRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest} PostMyselfDetailFolloweeRequest instance
                     */
                    PostMyselfDetailFolloweeRequest.create = function create(properties) {
                        return new PostMyselfDetailFolloweeRequest(properties);
                    };

                    /**
                     * Encodes the specified PostMyselfDetailFolloweeRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweeRequest} message PostMyselfDetailFolloweeRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselfDetailFolloweeRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
                        return writer;
                    };

                    /**
                     * Encodes the specified PostMyselfDetailFolloweeRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweeRequest} message PostMyselfDetailFolloweeRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselfDetailFolloweeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostMyselfDetailFolloweeRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest} PostMyselfDetailFolloweeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselfDetailFolloweeRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.playerId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostMyselfDetailFolloweeRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest} PostMyselfDetailFolloweeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselfDetailFolloweeRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostMyselfDetailFolloweeRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostMyselfDetailFolloweeRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.playerId != null && message.hasOwnProperty("playerId"))
                            if (!$util.isString(message.playerId))
                                return "playerId: string expected";
                        return null;
                    };

                    /**
                     * Creates a PostMyselfDetailFolloweeRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest} PostMyselfDetailFolloweeRequest
                     */
                    PostMyselfDetailFolloweeRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest();
                        if (object.playerId != null)
                            message.playerId = String(object.playerId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostMyselfDetailFolloweeRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest} message PostMyselfDetailFolloweeRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostMyselfDetailFolloweeRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.playerId = "";
                        if (message.playerId != null && message.hasOwnProperty("playerId"))
                            object.playerId = message.playerId;
                        return object;
                    };

                    /**
                     * Converts this PostMyselfDetailFolloweeRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweeRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostMyselfDetailFolloweeRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostMyselfDetailFolloweeRequest;
                })();

                proto.PostMyselfDetailFolloweesResponse = (function() {

                    /**
                     * Properties of a PostMyselfDetailFolloweesResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostMyselfDetailFolloweesResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IPlayer>|null} [players] PostMyselfDetailFolloweesResponse players
                     */

                    /**
                     * Constructs a new PostMyselfDetailFolloweesResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostMyselfDetailFolloweesResponse.
                     * @implements IPostMyselfDetailFolloweesResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweesResponse=} [properties] Properties to set
                     */
                    function PostMyselfDetailFolloweesResponse(properties) {
                        this.players = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostMyselfDetailFolloweesResponse players.
                     * @member {Array.<pj.sakuchin.percussion.proto.IPlayer>} players
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse
                     * @instance
                     */
                    PostMyselfDetailFolloweesResponse.prototype.players = $util.emptyArray;

                    /**
                     * Creates a new PostMyselfDetailFolloweesResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweesResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse} PostMyselfDetailFolloweesResponse instance
                     */
                    PostMyselfDetailFolloweesResponse.create = function create(properties) {
                        return new PostMyselfDetailFolloweesResponse(properties);
                    };

                    /**
                     * Encodes the specified PostMyselfDetailFolloweesResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweesResponse} message PostMyselfDetailFolloweesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselfDetailFolloweesResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.players != null && message.players.length)
                            for (var i = 0; i < message.players.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Player.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PostMyselfDetailFolloweesResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostMyselfDetailFolloweesResponse} message PostMyselfDetailFolloweesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostMyselfDetailFolloweesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostMyselfDetailFolloweesResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse} PostMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselfDetailFolloweesResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.players && message.players.length))
                                    message.players = [];
                                message.players.push($root.pj.sakuchin.percussion.proto.Player.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostMyselfDetailFolloweesResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse} PostMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostMyselfDetailFolloweesResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostMyselfDetailFolloweesResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostMyselfDetailFolloweesResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.players != null && message.hasOwnProperty("players")) {
                            if (!Array.isArray(message.players))
                                return "players: array expected";
                            for (var i = 0; i < message.players.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Player.verify(message.players[i]);
                                if (error)
                                    return "players." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PostMyselfDetailFolloweesResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse} PostMyselfDetailFolloweesResponse
                     */
                    PostMyselfDetailFolloweesResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse();
                        if (object.players) {
                            if (!Array.isArray(object.players))
                                throw TypeError(".pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse.players: array expected");
                            message.players = [];
                            for (var i = 0; i < object.players.length; ++i) {
                                if (typeof object.players[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse.players: object expected");
                                message.players[i] = $root.pj.sakuchin.percussion.proto.Player.fromObject(object.players[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostMyselfDetailFolloweesResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse} message PostMyselfDetailFolloweesResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostMyselfDetailFolloweesResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.players = [];
                        if (message.players && message.players.length) {
                            object.players = [];
                            for (var j = 0; j < message.players.length; ++j)
                                object.players[j] = $root.pj.sakuchin.percussion.proto.Player.toObject(message.players[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PostMyselfDetailFolloweesResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostMyselfDetailFolloweesResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostMyselfDetailFolloweesResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostMyselfDetailFolloweesResponse;
                })();

                proto.DeleteMyselfDetailFolloweeRequest = (function() {

                    /**
                     * Properties of a DeleteMyselfDetailFolloweeRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IDeleteMyselfDetailFolloweeRequest
                     * @property {string|null} [playerId] DeleteMyselfDetailFolloweeRequest playerId
                     */

                    /**
                     * Constructs a new DeleteMyselfDetailFolloweeRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a DeleteMyselfDetailFolloweeRequest.
                     * @implements IDeleteMyselfDetailFolloweeRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweeRequest=} [properties] Properties to set
                     */
                    function DeleteMyselfDetailFolloweeRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeleteMyselfDetailFolloweeRequest playerId.
                     * @member {string} playerId
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest
                     * @instance
                     */
                    DeleteMyselfDetailFolloweeRequest.prototype.playerId = "";

                    /**
                     * Creates a new DeleteMyselfDetailFolloweeRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweeRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest} DeleteMyselfDetailFolloweeRequest instance
                     */
                    DeleteMyselfDetailFolloweeRequest.create = function create(properties) {
                        return new DeleteMyselfDetailFolloweeRequest(properties);
                    };

                    /**
                     * Encodes the specified DeleteMyselfDetailFolloweeRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweeRequest} message DeleteMyselfDetailFolloweeRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselfDetailFolloweeRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteMyselfDetailFolloweeRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweeRequest} message DeleteMyselfDetailFolloweeRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselfDetailFolloweeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteMyselfDetailFolloweeRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest} DeleteMyselfDetailFolloweeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselfDetailFolloweeRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.playerId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteMyselfDetailFolloweeRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest} DeleteMyselfDetailFolloweeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselfDetailFolloweeRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteMyselfDetailFolloweeRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteMyselfDetailFolloweeRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.playerId != null && message.hasOwnProperty("playerId"))
                            if (!$util.isString(message.playerId))
                                return "playerId: string expected";
                        return null;
                    };

                    /**
                     * Creates a DeleteMyselfDetailFolloweeRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest} DeleteMyselfDetailFolloweeRequest
                     */
                    DeleteMyselfDetailFolloweeRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest();
                        if (object.playerId != null)
                            message.playerId = String(object.playerId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteMyselfDetailFolloweeRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest} message DeleteMyselfDetailFolloweeRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteMyselfDetailFolloweeRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.playerId = "";
                        if (message.playerId != null && message.hasOwnProperty("playerId"))
                            object.playerId = message.playerId;
                        return object;
                    };

                    /**
                     * Converts this DeleteMyselfDetailFolloweeRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweeRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteMyselfDetailFolloweeRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteMyselfDetailFolloweeRequest;
                })();

                proto.DeleteMyselfDetailFolloweesResponse = (function() {

                    /**
                     * Properties of a DeleteMyselfDetailFolloweesResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IDeleteMyselfDetailFolloweesResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IPlayer>|null} [players] DeleteMyselfDetailFolloweesResponse players
                     */

                    /**
                     * Constructs a new DeleteMyselfDetailFolloweesResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a DeleteMyselfDetailFolloweesResponse.
                     * @implements IDeleteMyselfDetailFolloweesResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweesResponse=} [properties] Properties to set
                     */
                    function DeleteMyselfDetailFolloweesResponse(properties) {
                        this.players = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeleteMyselfDetailFolloweesResponse players.
                     * @member {Array.<pj.sakuchin.percussion.proto.IPlayer>} players
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse
                     * @instance
                     */
                    DeleteMyselfDetailFolloweesResponse.prototype.players = $util.emptyArray;

                    /**
                     * Creates a new DeleteMyselfDetailFolloweesResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweesResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse} DeleteMyselfDetailFolloweesResponse instance
                     */
                    DeleteMyselfDetailFolloweesResponse.create = function create(properties) {
                        return new DeleteMyselfDetailFolloweesResponse(properties);
                    };

                    /**
                     * Encodes the specified DeleteMyselfDetailFolloweesResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweesResponse} message DeleteMyselfDetailFolloweesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselfDetailFolloweesResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.players != null && message.players.length)
                            for (var i = 0; i < message.players.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Player.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteMyselfDetailFolloweesResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IDeleteMyselfDetailFolloweesResponse} message DeleteMyselfDetailFolloweesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMyselfDetailFolloweesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteMyselfDetailFolloweesResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse} DeleteMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselfDetailFolloweesResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.players && message.players.length))
                                    message.players = [];
                                message.players.push($root.pj.sakuchin.percussion.proto.Player.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteMyselfDetailFolloweesResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse} DeleteMyselfDetailFolloweesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMyselfDetailFolloweesResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteMyselfDetailFolloweesResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteMyselfDetailFolloweesResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.players != null && message.hasOwnProperty("players")) {
                            if (!Array.isArray(message.players))
                                return "players: array expected";
                            for (var i = 0; i < message.players.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Player.verify(message.players[i]);
                                if (error)
                                    return "players." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a DeleteMyselfDetailFolloweesResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse} DeleteMyselfDetailFolloweesResponse
                     */
                    DeleteMyselfDetailFolloweesResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse();
                        if (object.players) {
                            if (!Array.isArray(object.players))
                                throw TypeError(".pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse.players: array expected");
                            message.players = [];
                            for (var i = 0; i < object.players.length; ++i) {
                                if (typeof object.players[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse.players: object expected");
                                message.players[i] = $root.pj.sakuchin.percussion.proto.Player.fromObject(object.players[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeleteMyselfDetailFolloweesResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse} message DeleteMyselfDetailFolloweesResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteMyselfDetailFolloweesResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.players = [];
                        if (message.players && message.players.length) {
                            object.players = [];
                            for (var j = 0; j < message.players.length; ++j)
                                object.players[j] = $root.pj.sakuchin.percussion.proto.Player.toObject(message.players[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this DeleteMyselfDetailFolloweesResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.DeleteMyselfDetailFolloweesResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteMyselfDetailFolloweesResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteMyselfDetailFolloweesResponse;
                })();

                proto.Player = (function() {

                    /**
                     * Properties of a Player.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPlayer
                     * @property {string|null} [id] Player id
                     * @property {string|null} [name] Player name
                     * @property {string|null} [icon] Player icon
                     */

                    /**
                     * Constructs a new Player.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a Player.
                     * @implements IPlayer
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPlayer=} [properties] Properties to set
                     */
                    function Player(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Player id.
                     * @member {string} id
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @instance
                     */
                    Player.prototype.id = "";

                    /**
                     * Player name.
                     * @member {string} name
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @instance
                     */
                    Player.prototype.name = "";

                    /**
                     * Player icon.
                     * @member {string} icon
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @instance
                     */
                    Player.prototype.icon = "";

                    /**
                     * Creates a new Player instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPlayer=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.Player} Player instance
                     */
                    Player.create = function create(properties) {
                        return new Player(properties);
                    };

                    /**
                     * Encodes the specified Player message. Does not implicitly {@link pj.sakuchin.percussion.proto.Player.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPlayer} message Player message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Player.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
                        return writer;
                    };

                    /**
                     * Encodes the specified Player message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.Player.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPlayer} message Player message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Player.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Player message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.Player} Player
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Player.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.Player();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.icon = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Player message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.Player} Player
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Player.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Player message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Player.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.icon != null && message.hasOwnProperty("icon"))
                            if (!$util.isString(message.icon))
                                return "icon: string expected";
                        return null;
                    };

                    /**
                     * Creates a Player message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.Player} Player
                     */
                    Player.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.Player)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.Player();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.icon != null)
                            message.icon = String(object.icon);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Player message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @static
                     * @param {pj.sakuchin.percussion.proto.Player} message Player
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Player.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.name = "";
                            object.icon = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.icon != null && message.hasOwnProperty("icon"))
                            object.icon = message.icon;
                        return object;
                    };

                    /**
                     * Converts this Player to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.Player
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Player.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Player;
                })();

                proto.PlayerDetail = (function() {

                    /**
                     * Properties of a PlayerDetail.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPlayerDetail
                     * @property {string|null} [id] PlayerDetail id
                     * @property {string|null} [name] PlayerDetail name
                     * @property {string|null} [icon] PlayerDetail icon
                     * @property {string|null} [introduction] PlayerDetail introduction
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [activeAreas] PlayerDetail activeAreas
                     * @property {Array.<pj.sakuchin.percussion.proto.IInstrument>|null} [instruments] PlayerDetail instruments
                     * @property {Array.<pj.sakuchin.percussion.proto.IPlayer>|null} [followers] PlayerDetail followers
                     * @property {Array.<pj.sakuchin.percussion.proto.IPlayer>|null} [followees] PlayerDetail followees
                     */

                    /**
                     * Constructs a new PlayerDetail.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PlayerDetail.
                     * @implements IPlayerDetail
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPlayerDetail=} [properties] Properties to set
                     */
                    function PlayerDetail(properties) {
                        this.activeAreas = [];
                        this.instruments = [];
                        this.followers = [];
                        this.followees = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PlayerDetail id.
                     * @member {string} id
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @instance
                     */
                    PlayerDetail.prototype.id = "";

                    /**
                     * PlayerDetail name.
                     * @member {string} name
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @instance
                     */
                    PlayerDetail.prototype.name = "";

                    /**
                     * PlayerDetail icon.
                     * @member {string} icon
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @instance
                     */
                    PlayerDetail.prototype.icon = "";

                    /**
                     * PlayerDetail introduction.
                     * @member {string} introduction
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @instance
                     */
                    PlayerDetail.prototype.introduction = "";

                    /**
                     * PlayerDetail activeAreas.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} activeAreas
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @instance
                     */
                    PlayerDetail.prototype.activeAreas = $util.emptyArray;

                    /**
                     * PlayerDetail instruments.
                     * @member {Array.<pj.sakuchin.percussion.proto.IInstrument>} instruments
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @instance
                     */
                    PlayerDetail.prototype.instruments = $util.emptyArray;

                    /**
                     * PlayerDetail followers.
                     * @member {Array.<pj.sakuchin.percussion.proto.IPlayer>} followers
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @instance
                     */
                    PlayerDetail.prototype.followers = $util.emptyArray;

                    /**
                     * PlayerDetail followees.
                     * @member {Array.<pj.sakuchin.percussion.proto.IPlayer>} followees
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @instance
                     */
                    PlayerDetail.prototype.followees = $util.emptyArray;

                    /**
                     * Creates a new PlayerDetail instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPlayerDetail=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PlayerDetail} PlayerDetail instance
                     */
                    PlayerDetail.create = function create(properties) {
                        return new PlayerDetail(properties);
                    };

                    /**
                     * Encodes the specified PlayerDetail message. Does not implicitly {@link pj.sakuchin.percussion.proto.PlayerDetail.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPlayerDetail} message PlayerDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PlayerDetail.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
                        if (message.introduction != null && Object.hasOwnProperty.call(message, "introduction"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.introduction);
                        if (message.activeAreas != null && message.activeAreas.length)
                            for (var i = 0; i < message.activeAreas.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.activeAreas[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.instruments != null && message.instruments.length)
                            for (var i = 0; i < message.instruments.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Instrument.encode(message.instruments[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.followers != null && message.followers.length)
                            for (var i = 0; i < message.followers.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Player.encode(message.followers[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.followees != null && message.followees.length)
                            for (var i = 0; i < message.followees.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Player.encode(message.followees[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PlayerDetail message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PlayerDetail.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPlayerDetail} message PlayerDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PlayerDetail.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PlayerDetail message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PlayerDetail} PlayerDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PlayerDetail.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PlayerDetail();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.icon = reader.string();
                                break;
                            case 4:
                                message.introduction = reader.string();
                                break;
                            case 5:
                                if (!(message.activeAreas && message.activeAreas.length))
                                    message.activeAreas = [];
                                message.activeAreas.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            case 6:
                                if (!(message.instruments && message.instruments.length))
                                    message.instruments = [];
                                message.instruments.push($root.pj.sakuchin.percussion.proto.Instrument.decode(reader, reader.uint32()));
                                break;
                            case 7:
                                if (!(message.followers && message.followers.length))
                                    message.followers = [];
                                message.followers.push($root.pj.sakuchin.percussion.proto.Player.decode(reader, reader.uint32()));
                                break;
                            case 8:
                                if (!(message.followees && message.followees.length))
                                    message.followees = [];
                                message.followees.push($root.pj.sakuchin.percussion.proto.Player.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PlayerDetail message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PlayerDetail} PlayerDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PlayerDetail.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PlayerDetail message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PlayerDetail.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.icon != null && message.hasOwnProperty("icon"))
                            if (!$util.isString(message.icon))
                                return "icon: string expected";
                        if (message.introduction != null && message.hasOwnProperty("introduction"))
                            if (!$util.isString(message.introduction))
                                return "introduction: string expected";
                        if (message.activeAreas != null && message.hasOwnProperty("activeAreas")) {
                            if (!Array.isArray(message.activeAreas))
                                return "activeAreas: array expected";
                            for (var i = 0; i < message.activeAreas.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.activeAreas[i]);
                                if (error)
                                    return "activeAreas." + error;
                            }
                        }
                        if (message.instruments != null && message.hasOwnProperty("instruments")) {
                            if (!Array.isArray(message.instruments))
                                return "instruments: array expected";
                            for (var i = 0; i < message.instruments.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Instrument.verify(message.instruments[i]);
                                if (error)
                                    return "instruments." + error;
                            }
                        }
                        if (message.followers != null && message.hasOwnProperty("followers")) {
                            if (!Array.isArray(message.followers))
                                return "followers: array expected";
                            for (var i = 0; i < message.followers.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Player.verify(message.followers[i]);
                                if (error)
                                    return "followers." + error;
                            }
                        }
                        if (message.followees != null && message.hasOwnProperty("followees")) {
                            if (!Array.isArray(message.followees))
                                return "followees: array expected";
                            for (var i = 0; i < message.followees.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Player.verify(message.followees[i]);
                                if (error)
                                    return "followees." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PlayerDetail message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PlayerDetail} PlayerDetail
                     */
                    PlayerDetail.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PlayerDetail)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PlayerDetail();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.icon != null)
                            message.icon = String(object.icon);
                        if (object.introduction != null)
                            message.introduction = String(object.introduction);
                        if (object.activeAreas) {
                            if (!Array.isArray(object.activeAreas))
                                throw TypeError(".pj.sakuchin.percussion.proto.PlayerDetail.activeAreas: array expected");
                            message.activeAreas = [];
                            for (var i = 0; i < object.activeAreas.length; ++i) {
                                if (typeof object.activeAreas[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PlayerDetail.activeAreas: object expected");
                                message.activeAreas[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.activeAreas[i]);
                            }
                        }
                        if (object.instruments) {
                            if (!Array.isArray(object.instruments))
                                throw TypeError(".pj.sakuchin.percussion.proto.PlayerDetail.instruments: array expected");
                            message.instruments = [];
                            for (var i = 0; i < object.instruments.length; ++i) {
                                if (typeof object.instruments[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PlayerDetail.instruments: object expected");
                                message.instruments[i] = $root.pj.sakuchin.percussion.proto.Instrument.fromObject(object.instruments[i]);
                            }
                        }
                        if (object.followers) {
                            if (!Array.isArray(object.followers))
                                throw TypeError(".pj.sakuchin.percussion.proto.PlayerDetail.followers: array expected");
                            message.followers = [];
                            for (var i = 0; i < object.followers.length; ++i) {
                                if (typeof object.followers[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PlayerDetail.followers: object expected");
                                message.followers[i] = $root.pj.sakuchin.percussion.proto.Player.fromObject(object.followers[i]);
                            }
                        }
                        if (object.followees) {
                            if (!Array.isArray(object.followees))
                                throw TypeError(".pj.sakuchin.percussion.proto.PlayerDetail.followees: array expected");
                            message.followees = [];
                            for (var i = 0; i < object.followees.length; ++i) {
                                if (typeof object.followees[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PlayerDetail.followees: object expected");
                                message.followees[i] = $root.pj.sakuchin.percussion.proto.Player.fromObject(object.followees[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PlayerDetail message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PlayerDetail} message PlayerDetail
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PlayerDetail.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.activeAreas = [];
                            object.instruments = [];
                            object.followers = [];
                            object.followees = [];
                        }
                        if (options.defaults) {
                            object.id = "";
                            object.name = "";
                            object.icon = "";
                            object.introduction = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.icon != null && message.hasOwnProperty("icon"))
                            object.icon = message.icon;
                        if (message.introduction != null && message.hasOwnProperty("introduction"))
                            object.introduction = message.introduction;
                        if (message.activeAreas && message.activeAreas.length) {
                            object.activeAreas = [];
                            for (var j = 0; j < message.activeAreas.length; ++j)
                                object.activeAreas[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.activeAreas[j], options);
                        }
                        if (message.instruments && message.instruments.length) {
                            object.instruments = [];
                            for (var j = 0; j < message.instruments.length; ++j)
                                object.instruments[j] = $root.pj.sakuchin.percussion.proto.Instrument.toObject(message.instruments[j], options);
                        }
                        if (message.followers && message.followers.length) {
                            object.followers = [];
                            for (var j = 0; j < message.followers.length; ++j)
                                object.followers[j] = $root.pj.sakuchin.percussion.proto.Player.toObject(message.followers[j], options);
                        }
                        if (message.followees && message.followees.length) {
                            object.followees = [];
                            for (var j = 0; j < message.followees.length; ++j)
                                object.followees[j] = $root.pj.sakuchin.percussion.proto.Player.toObject(message.followees[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PlayerDetail to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PlayerDetail
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PlayerDetail.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PlayerDetail;
                })();

                proto.GetPlayerResponse = (function() {

                    /**
                     * Properties of a GetPlayerResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetPlayerResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IPlayer>|null} [players] GetPlayerResponse players
                     */

                    /**
                     * Constructs a new GetPlayerResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetPlayerResponse.
                     * @implements IGetPlayerResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerResponse=} [properties] Properties to set
                     */
                    function GetPlayerResponse(properties) {
                        this.players = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetPlayerResponse players.
                     * @member {Array.<pj.sakuchin.percussion.proto.IPlayer>} players
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerResponse
                     * @instance
                     */
                    GetPlayerResponse.prototype.players = $util.emptyArray;

                    /**
                     * Creates a new GetPlayerResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerResponse} GetPlayerResponse instance
                     */
                    GetPlayerResponse.create = function create(properties) {
                        return new GetPlayerResponse(properties);
                    };

                    /**
                     * Encodes the specified GetPlayerResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerResponse} message GetPlayerResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.players != null && message.players.length)
                            for (var i = 0; i < message.players.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Player.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetPlayerResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerResponse} message GetPlayerResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetPlayerResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerResponse} GetPlayerResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetPlayerResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.players && message.players.length))
                                    message.players = [];
                                message.players.push($root.pj.sakuchin.percussion.proto.Player.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetPlayerResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerResponse} GetPlayerResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetPlayerResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetPlayerResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.players != null && message.hasOwnProperty("players")) {
                            if (!Array.isArray(message.players))
                                return "players: array expected";
                            for (var i = 0; i < message.players.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Player.verify(message.players[i]);
                                if (error)
                                    return "players." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetPlayerResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerResponse} GetPlayerResponse
                     */
                    GetPlayerResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetPlayerResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetPlayerResponse();
                        if (object.players) {
                            if (!Array.isArray(object.players))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerResponse.players: array expected");
                            message.players = [];
                            for (var i = 0; i < object.players.length; ++i) {
                                if (typeof object.players[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerResponse.players: object expected");
                                message.players[i] = $root.pj.sakuchin.percussion.proto.Player.fromObject(object.players[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetPlayerResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetPlayerResponse} message GetPlayerResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetPlayerResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.players = [];
                        if (message.players && message.players.length) {
                            object.players = [];
                            for (var j = 0; j < message.players.length; ++j)
                                object.players[j] = $root.pj.sakuchin.percussion.proto.Player.toObject(message.players[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetPlayerResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetPlayerResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetPlayerResponse;
                })();

                proto.GetPlayerDetailResponse = (function() {

                    /**
                     * Properties of a GetPlayerDetailResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetPlayerDetailResponse
                     * @property {pj.sakuchin.percussion.proto.IPlayerDetail|null} [detail] GetPlayerDetailResponse detail
                     */

                    /**
                     * Constructs a new GetPlayerDetailResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetPlayerDetailResponse.
                     * @implements IGetPlayerDetailResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailResponse=} [properties] Properties to set
                     */
                    function GetPlayerDetailResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetPlayerDetailResponse detail.
                     * @member {pj.sakuchin.percussion.proto.IPlayerDetail|null|undefined} detail
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailResponse
                     * @instance
                     */
                    GetPlayerDetailResponse.prototype.detail = null;

                    /**
                     * Creates a new GetPlayerDetailResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailResponse} GetPlayerDetailResponse instance
                     */
                    GetPlayerDetailResponse.create = function create(properties) {
                        return new GetPlayerDetailResponse(properties);
                    };

                    /**
                     * Encodes the specified GetPlayerDetailResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailResponse} message GetPlayerDetailResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                            $root.pj.sakuchin.percussion.proto.PlayerDetail.encode(message.detail, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetPlayerDetailResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailResponse} message GetPlayerDetailResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetPlayerDetailResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailResponse} GetPlayerDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetPlayerDetailResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailResponse} GetPlayerDetailResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetPlayerDetailResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetPlayerDetailResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.detail != null && message.hasOwnProperty("detail")) {
                            var error = $root.pj.sakuchin.percussion.proto.PlayerDetail.verify(message.detail);
                            if (error)
                                return "detail." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a GetPlayerDetailResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailResponse} GetPlayerDetailResponse
                     */
                    GetPlayerDetailResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetPlayerDetailResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailResponse();
                        if (object.detail != null) {
                            if (typeof object.detail !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerDetailResponse.detail: object expected");
                            message.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.fromObject(object.detail);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetPlayerDetailResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetPlayerDetailResponse} message GetPlayerDetailResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetPlayerDetailResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.detail = null;
                        if (message.detail != null && message.hasOwnProperty("detail"))
                            object.detail = $root.pj.sakuchin.percussion.proto.PlayerDetail.toObject(message.detail, options);
                        return object;
                    };

                    /**
                     * Converts this GetPlayerDetailResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetPlayerDetailResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetPlayerDetailResponse;
                })();

                proto.GetPlayerDetailAreaResponse = (function() {

                    /**
                     * Properties of a GetPlayerDetailAreaResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetPlayerDetailAreaResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [activeAreas] GetPlayerDetailAreaResponse activeAreas
                     */

                    /**
                     * Constructs a new GetPlayerDetailAreaResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetPlayerDetailAreaResponse.
                     * @implements IGetPlayerDetailAreaResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailAreaResponse=} [properties] Properties to set
                     */
                    function GetPlayerDetailAreaResponse(properties) {
                        this.activeAreas = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetPlayerDetailAreaResponse activeAreas.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} activeAreas
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse
                     * @instance
                     */
                    GetPlayerDetailAreaResponse.prototype.activeAreas = $util.emptyArray;

                    /**
                     * Creates a new GetPlayerDetailAreaResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailAreaResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse} GetPlayerDetailAreaResponse instance
                     */
                    GetPlayerDetailAreaResponse.create = function create(properties) {
                        return new GetPlayerDetailAreaResponse(properties);
                    };

                    /**
                     * Encodes the specified GetPlayerDetailAreaResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailAreaResponse} message GetPlayerDetailAreaResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailAreaResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.activeAreas != null && message.activeAreas.length)
                            for (var i = 0; i < message.activeAreas.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.activeAreas[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetPlayerDetailAreaResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailAreaResponse} message GetPlayerDetailAreaResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailAreaResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetPlayerDetailAreaResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse} GetPlayerDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailAreaResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.activeAreas && message.activeAreas.length))
                                    message.activeAreas = [];
                                message.activeAreas.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetPlayerDetailAreaResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse} GetPlayerDetailAreaResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailAreaResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetPlayerDetailAreaResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetPlayerDetailAreaResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.activeAreas != null && message.hasOwnProperty("activeAreas")) {
                            if (!Array.isArray(message.activeAreas))
                                return "activeAreas: array expected";
                            for (var i = 0; i < message.activeAreas.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.activeAreas[i]);
                                if (error)
                                    return "activeAreas." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetPlayerDetailAreaResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse} GetPlayerDetailAreaResponse
                     */
                    GetPlayerDetailAreaResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse();
                        if (object.activeAreas) {
                            if (!Array.isArray(object.activeAreas))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse.activeAreas: array expected");
                            message.activeAreas = [];
                            for (var i = 0; i < object.activeAreas.length; ++i) {
                                if (typeof object.activeAreas[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse.activeAreas: object expected");
                                message.activeAreas[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.activeAreas[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetPlayerDetailAreaResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse} message GetPlayerDetailAreaResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetPlayerDetailAreaResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.activeAreas = [];
                        if (message.activeAreas && message.activeAreas.length) {
                            object.activeAreas = [];
                            for (var j = 0; j < message.activeAreas.length; ++j)
                                object.activeAreas[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.activeAreas[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetPlayerDetailAreaResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailAreaResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetPlayerDetailAreaResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetPlayerDetailAreaResponse;
                })();

                proto.GetPlayerDetailInstrumentResponse = (function() {

                    /**
                     * Properties of a GetPlayerDetailInstrumentResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetPlayerDetailInstrumentResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IInstrument>|null} [instruments] GetPlayerDetailInstrumentResponse instruments
                     */

                    /**
                     * Constructs a new GetPlayerDetailInstrumentResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetPlayerDetailInstrumentResponse.
                     * @implements IGetPlayerDetailInstrumentResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailInstrumentResponse=} [properties] Properties to set
                     */
                    function GetPlayerDetailInstrumentResponse(properties) {
                        this.instruments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetPlayerDetailInstrumentResponse instruments.
                     * @member {Array.<pj.sakuchin.percussion.proto.IInstrument>} instruments
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse
                     * @instance
                     */
                    GetPlayerDetailInstrumentResponse.prototype.instruments = $util.emptyArray;

                    /**
                     * Creates a new GetPlayerDetailInstrumentResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailInstrumentResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse} GetPlayerDetailInstrumentResponse instance
                     */
                    GetPlayerDetailInstrumentResponse.create = function create(properties) {
                        return new GetPlayerDetailInstrumentResponse(properties);
                    };

                    /**
                     * Encodes the specified GetPlayerDetailInstrumentResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailInstrumentResponse} message GetPlayerDetailInstrumentResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailInstrumentResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instruments != null && message.instruments.length)
                            for (var i = 0; i < message.instruments.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Instrument.encode(message.instruments[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetPlayerDetailInstrumentResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailInstrumentResponse} message GetPlayerDetailInstrumentResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailInstrumentResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetPlayerDetailInstrumentResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse} GetPlayerDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailInstrumentResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.instruments && message.instruments.length))
                                    message.instruments = [];
                                message.instruments.push($root.pj.sakuchin.percussion.proto.Instrument.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetPlayerDetailInstrumentResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse} GetPlayerDetailInstrumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailInstrumentResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetPlayerDetailInstrumentResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetPlayerDetailInstrumentResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instruments != null && message.hasOwnProperty("instruments")) {
                            if (!Array.isArray(message.instruments))
                                return "instruments: array expected";
                            for (var i = 0; i < message.instruments.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Instrument.verify(message.instruments[i]);
                                if (error)
                                    return "instruments." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetPlayerDetailInstrumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse} GetPlayerDetailInstrumentResponse
                     */
                    GetPlayerDetailInstrumentResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse();
                        if (object.instruments) {
                            if (!Array.isArray(object.instruments))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse.instruments: array expected");
                            message.instruments = [];
                            for (var i = 0; i < object.instruments.length; ++i) {
                                if (typeof object.instruments[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse.instruments: object expected");
                                message.instruments[i] = $root.pj.sakuchin.percussion.proto.Instrument.fromObject(object.instruments[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetPlayerDetailInstrumentResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse} message GetPlayerDetailInstrumentResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetPlayerDetailInstrumentResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.instruments = [];
                        if (message.instruments && message.instruments.length) {
                            object.instruments = [];
                            for (var j = 0; j < message.instruments.length; ++j)
                                object.instruments[j] = $root.pj.sakuchin.percussion.proto.Instrument.toObject(message.instruments[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetPlayerDetailInstrumentResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailInstrumentResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetPlayerDetailInstrumentResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetPlayerDetailInstrumentResponse;
                })();

                proto.GetPlayerDetailStudioResponse = (function() {

                    /**
                     * Properties of a GetPlayerDetailStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetPlayerDetailStudioResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IStudio>|null} [studios] GetPlayerDetailStudioResponse studios
                     */

                    /**
                     * Constructs a new GetPlayerDetailStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetPlayerDetailStudioResponse.
                     * @implements IGetPlayerDetailStudioResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailStudioResponse=} [properties] Properties to set
                     */
                    function GetPlayerDetailStudioResponse(properties) {
                        this.studios = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetPlayerDetailStudioResponse studios.
                     * @member {Array.<pj.sakuchin.percussion.proto.IStudio>} studios
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse
                     * @instance
                     */
                    GetPlayerDetailStudioResponse.prototype.studios = $util.emptyArray;

                    /**
                     * Creates a new GetPlayerDetailStudioResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailStudioResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse} GetPlayerDetailStudioResponse instance
                     */
                    GetPlayerDetailStudioResponse.create = function create(properties) {
                        return new GetPlayerDetailStudioResponse(properties);
                    };

                    /**
                     * Encodes the specified GetPlayerDetailStudioResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailStudioResponse} message GetPlayerDetailStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailStudioResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.studios != null && message.studios.length)
                            for (var i = 0; i < message.studios.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Studio.encode(message.studios[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetPlayerDetailStudioResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailStudioResponse} message GetPlayerDetailStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailStudioResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetPlayerDetailStudioResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse} GetPlayerDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailStudioResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.studios && message.studios.length))
                                    message.studios = [];
                                message.studios.push($root.pj.sakuchin.percussion.proto.Studio.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetPlayerDetailStudioResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse} GetPlayerDetailStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailStudioResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetPlayerDetailStudioResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetPlayerDetailStudioResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.studios != null && message.hasOwnProperty("studios")) {
                            if (!Array.isArray(message.studios))
                                return "studios: array expected";
                            for (var i = 0; i < message.studios.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Studio.verify(message.studios[i]);
                                if (error)
                                    return "studios." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetPlayerDetailStudioResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse} GetPlayerDetailStudioResponse
                     */
                    GetPlayerDetailStudioResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse();
                        if (object.studios) {
                            if (!Array.isArray(object.studios))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse.studios: array expected");
                            message.studios = [];
                            for (var i = 0; i < object.studios.length; ++i) {
                                if (typeof object.studios[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse.studios: object expected");
                                message.studios[i] = $root.pj.sakuchin.percussion.proto.Studio.fromObject(object.studios[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetPlayerDetailStudioResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse} message GetPlayerDetailStudioResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetPlayerDetailStudioResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.studios = [];
                        if (message.studios && message.studios.length) {
                            object.studios = [];
                            for (var j = 0; j < message.studios.length; ++j)
                                object.studios[j] = $root.pj.sakuchin.percussion.proto.Studio.toObject(message.studios[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetPlayerDetailStudioResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailStudioResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetPlayerDetailStudioResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetPlayerDetailStudioResponse;
                })();

                proto.GetPlayerDetailFollowerResponse = (function() {

                    /**
                     * Properties of a GetPlayerDetailFollowerResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetPlayerDetailFollowerResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IPlayer>|null} [followers] GetPlayerDetailFollowerResponse followers
                     */

                    /**
                     * Constructs a new GetPlayerDetailFollowerResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetPlayerDetailFollowerResponse.
                     * @implements IGetPlayerDetailFollowerResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailFollowerResponse=} [properties] Properties to set
                     */
                    function GetPlayerDetailFollowerResponse(properties) {
                        this.followers = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetPlayerDetailFollowerResponse followers.
                     * @member {Array.<pj.sakuchin.percussion.proto.IPlayer>} followers
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse
                     * @instance
                     */
                    GetPlayerDetailFollowerResponse.prototype.followers = $util.emptyArray;

                    /**
                     * Creates a new GetPlayerDetailFollowerResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailFollowerResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse} GetPlayerDetailFollowerResponse instance
                     */
                    GetPlayerDetailFollowerResponse.create = function create(properties) {
                        return new GetPlayerDetailFollowerResponse(properties);
                    };

                    /**
                     * Encodes the specified GetPlayerDetailFollowerResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailFollowerResponse} message GetPlayerDetailFollowerResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailFollowerResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.followers != null && message.followers.length)
                            for (var i = 0; i < message.followers.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Player.encode(message.followers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetPlayerDetailFollowerResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailFollowerResponse} message GetPlayerDetailFollowerResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailFollowerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetPlayerDetailFollowerResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse} GetPlayerDetailFollowerResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailFollowerResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.followers && message.followers.length))
                                    message.followers = [];
                                message.followers.push($root.pj.sakuchin.percussion.proto.Player.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetPlayerDetailFollowerResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse} GetPlayerDetailFollowerResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailFollowerResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetPlayerDetailFollowerResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetPlayerDetailFollowerResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.followers != null && message.hasOwnProperty("followers")) {
                            if (!Array.isArray(message.followers))
                                return "followers: array expected";
                            for (var i = 0; i < message.followers.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Player.verify(message.followers[i]);
                                if (error)
                                    return "followers." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetPlayerDetailFollowerResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse} GetPlayerDetailFollowerResponse
                     */
                    GetPlayerDetailFollowerResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse();
                        if (object.followers) {
                            if (!Array.isArray(object.followers))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse.followers: array expected");
                            message.followers = [];
                            for (var i = 0; i < object.followers.length; ++i) {
                                if (typeof object.followers[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse.followers: object expected");
                                message.followers[i] = $root.pj.sakuchin.percussion.proto.Player.fromObject(object.followers[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetPlayerDetailFollowerResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse} message GetPlayerDetailFollowerResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetPlayerDetailFollowerResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.followers = [];
                        if (message.followers && message.followers.length) {
                            object.followers = [];
                            for (var j = 0; j < message.followers.length; ++j)
                                object.followers[j] = $root.pj.sakuchin.percussion.proto.Player.toObject(message.followers[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetPlayerDetailFollowerResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFollowerResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetPlayerDetailFollowerResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetPlayerDetailFollowerResponse;
                })();

                proto.GetPlayerDetailFolloweeResponse = (function() {

                    /**
                     * Properties of a GetPlayerDetailFolloweeResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetPlayerDetailFolloweeResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IPlayer>|null} [followers] GetPlayerDetailFolloweeResponse followers
                     */

                    /**
                     * Constructs a new GetPlayerDetailFolloweeResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetPlayerDetailFolloweeResponse.
                     * @implements IGetPlayerDetailFolloweeResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailFolloweeResponse=} [properties] Properties to set
                     */
                    function GetPlayerDetailFolloweeResponse(properties) {
                        this.followers = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetPlayerDetailFolloweeResponse followers.
                     * @member {Array.<pj.sakuchin.percussion.proto.IPlayer>} followers
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse
                     * @instance
                     */
                    GetPlayerDetailFolloweeResponse.prototype.followers = $util.emptyArray;

                    /**
                     * Creates a new GetPlayerDetailFolloweeResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailFolloweeResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse} GetPlayerDetailFolloweeResponse instance
                     */
                    GetPlayerDetailFolloweeResponse.create = function create(properties) {
                        return new GetPlayerDetailFolloweeResponse(properties);
                    };

                    /**
                     * Encodes the specified GetPlayerDetailFolloweeResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailFolloweeResponse} message GetPlayerDetailFolloweeResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailFolloweeResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.followers != null && message.followers.length)
                            for (var i = 0; i < message.followers.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Player.encode(message.followers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetPlayerDetailFolloweeResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetPlayerDetailFolloweeResponse} message GetPlayerDetailFolloweeResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerDetailFolloweeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetPlayerDetailFolloweeResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse} GetPlayerDetailFolloweeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailFolloweeResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.followers && message.followers.length))
                                    message.followers = [];
                                message.followers.push($root.pj.sakuchin.percussion.proto.Player.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetPlayerDetailFolloweeResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse} GetPlayerDetailFolloweeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerDetailFolloweeResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetPlayerDetailFolloweeResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetPlayerDetailFolloweeResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.followers != null && message.hasOwnProperty("followers")) {
                            if (!Array.isArray(message.followers))
                                return "followers: array expected";
                            for (var i = 0; i < message.followers.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Player.verify(message.followers[i]);
                                if (error)
                                    return "followers." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetPlayerDetailFolloweeResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse} GetPlayerDetailFolloweeResponse
                     */
                    GetPlayerDetailFolloweeResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse();
                        if (object.followers) {
                            if (!Array.isArray(object.followers))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse.followers: array expected");
                            message.followers = [];
                            for (var i = 0; i < object.followers.length; ++i) {
                                if (typeof object.followers[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse.followers: object expected");
                                message.followers[i] = $root.pj.sakuchin.percussion.proto.Player.fromObject(object.followers[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetPlayerDetailFolloweeResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse} message GetPlayerDetailFolloweeResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetPlayerDetailFolloweeResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.followers = [];
                        if (message.followers && message.followers.length) {
                            object.followers = [];
                            for (var j = 0; j < message.followers.length; ++j)
                                object.followers[j] = $root.pj.sakuchin.percussion.proto.Player.toObject(message.followers[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetPlayerDetailFolloweeResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetPlayerDetailFolloweeResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetPlayerDetailFolloweeResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetPlayerDetailFolloweeResponse;
                })();

                proto.Studio = (function() {

                    /**
                     * Properties of a Studio.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IStudio
                     * @property {number|null} [id] Studio id
                     * @property {string|null} [name] Studio name
                     * @property {string|null} [url] Studio url
                     * @property {pj.sakuchin.percussion.proto.ICity|null} [city] Studio city
                     * @property {string|null} [authorPlayerId] Studio authorPlayerId
                     */

                    /**
                     * Constructs a new Studio.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a Studio.
                     * @implements IStudio
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IStudio=} [properties] Properties to set
                     */
                    function Studio(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Studio id.
                     * @member {number} id
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @instance
                     */
                    Studio.prototype.id = 0;

                    /**
                     * Studio name.
                     * @member {string} name
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @instance
                     */
                    Studio.prototype.name = "";

                    /**
                     * Studio url.
                     * @member {string} url
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @instance
                     */
                    Studio.prototype.url = "";

                    /**
                     * Studio city.
                     * @member {pj.sakuchin.percussion.proto.ICity|null|undefined} city
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @instance
                     */
                    Studio.prototype.city = null;

                    /**
                     * Studio authorPlayerId.
                     * @member {string} authorPlayerId
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @instance
                     */
                    Studio.prototype.authorPlayerId = "";

                    /**
                     * Creates a new Studio instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IStudio=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.Studio} Studio instance
                     */
                    Studio.create = function create(properties) {
                        return new Studio(properties);
                    };

                    /**
                     * Encodes the specified Studio message. Does not implicitly {@link pj.sakuchin.percussion.proto.Studio.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IStudio} message Studio message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Studio.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
                        if (message.city != null && Object.hasOwnProperty.call(message, "city"))
                            $root.pj.sakuchin.percussion.proto.City.encode(message.city, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.authorPlayerId != null && Object.hasOwnProperty.call(message, "authorPlayerId"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.authorPlayerId);
                        return writer;
                    };

                    /**
                     * Encodes the specified Studio message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.Studio.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IStudio} message Studio message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Studio.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Studio message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.Studio} Studio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Studio.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.Studio();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.int32();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.url = reader.string();
                                break;
                            case 4:
                                message.city = $root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.authorPlayerId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Studio message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.Studio} Studio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Studio.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Studio message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Studio.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id))
                                return "id: integer expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.url != null && message.hasOwnProperty("url"))
                            if (!$util.isString(message.url))
                                return "url: string expected";
                        if (message.city != null && message.hasOwnProperty("city")) {
                            var error = $root.pj.sakuchin.percussion.proto.City.verify(message.city);
                            if (error)
                                return "city." + error;
                        }
                        if (message.authorPlayerId != null && message.hasOwnProperty("authorPlayerId"))
                            if (!$util.isString(message.authorPlayerId))
                                return "authorPlayerId: string expected";
                        return null;
                    };

                    /**
                     * Creates a Studio message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.Studio} Studio
                     */
                    Studio.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.Studio)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.Studio();
                        if (object.id != null)
                            message.id = object.id | 0;
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.url != null)
                            message.url = String(object.url);
                        if (object.city != null) {
                            if (typeof object.city !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.Studio.city: object expected");
                            message.city = $root.pj.sakuchin.percussion.proto.City.fromObject(object.city);
                        }
                        if (object.authorPlayerId != null)
                            message.authorPlayerId = String(object.authorPlayerId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Studio message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @static
                     * @param {pj.sakuchin.percussion.proto.Studio} message Studio
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Studio.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = 0;
                            object.name = "";
                            object.url = "";
                            object.city = null;
                            object.authorPlayerId = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.url != null && message.hasOwnProperty("url"))
                            object.url = message.url;
                        if (message.city != null && message.hasOwnProperty("city"))
                            object.city = $root.pj.sakuchin.percussion.proto.City.toObject(message.city, options);
                        if (message.authorPlayerId != null && message.hasOwnProperty("authorPlayerId"))
                            object.authorPlayerId = message.authorPlayerId;
                        return object;
                    };

                    /**
                     * Converts this Studio to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.Studio
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Studio.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Studio;
                })();

                proto.GetStudioResponse = (function() {

                    /**
                     * Properties of a GetStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetStudioResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IStudio>|null} [studios] GetStudioResponse studios
                     */

                    /**
                     * Constructs a new GetStudioResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetStudioResponse.
                     * @implements IGetStudioResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetStudioResponse=} [properties] Properties to set
                     */
                    function GetStudioResponse(properties) {
                        this.studios = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetStudioResponse studios.
                     * @member {Array.<pj.sakuchin.percussion.proto.IStudio>} studios
                     * @memberof pj.sakuchin.percussion.proto.GetStudioResponse
                     * @instance
                     */
                    GetStudioResponse.prototype.studios = $util.emptyArray;

                    /**
                     * Creates a new GetStudioResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetStudioResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetStudioResponse} GetStudioResponse instance
                     */
                    GetStudioResponse.create = function create(properties) {
                        return new GetStudioResponse(properties);
                    };

                    /**
                     * Encodes the specified GetStudioResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetStudioResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetStudioResponse} message GetStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetStudioResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.studios != null && message.studios.length)
                            for (var i = 0; i < message.studios.length; ++i)
                                $root.pj.sakuchin.percussion.proto.Studio.encode(message.studios[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetStudioResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetStudioResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetStudioResponse} message GetStudioResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetStudioResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetStudioResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetStudioResponse} GetStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetStudioResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetStudioResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.studios && message.studios.length))
                                    message.studios = [];
                                message.studios.push($root.pj.sakuchin.percussion.proto.Studio.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetStudioResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetStudioResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetStudioResponse} GetStudioResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetStudioResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetStudioResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetStudioResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetStudioResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.studios != null && message.hasOwnProperty("studios")) {
                            if (!Array.isArray(message.studios))
                                return "studios: array expected";
                            for (var i = 0; i < message.studios.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.Studio.verify(message.studios[i]);
                                if (error)
                                    return "studios." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetStudioResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetStudioResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetStudioResponse} GetStudioResponse
                     */
                    GetStudioResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetStudioResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetStudioResponse();
                        if (object.studios) {
                            if (!Array.isArray(object.studios))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetStudioResponse.studios: array expected");
                            message.studios = [];
                            for (var i = 0; i < object.studios.length; ++i) {
                                if (typeof object.studios[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetStudioResponse.studios: object expected");
                                message.studios[i] = $root.pj.sakuchin.percussion.proto.Studio.fromObject(object.studios[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetStudioResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetStudioResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetStudioResponse} message GetStudioResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetStudioResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.studios = [];
                        if (message.studios && message.studios.length) {
                            object.studios = [];
                            for (var j = 0; j < message.studios.length; ++j)
                                object.studios[j] = $root.pj.sakuchin.percussion.proto.Studio.toObject(message.studios[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetStudioResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetStudioResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetStudioResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetStudioResponse;
                })();

                proto.PostStudioRequest = (function() {

                    /**
                     * Properties of a PostStudioRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostStudioRequest
                     * @property {string|null} [name] PostStudioRequest name
                     * @property {string|null} [url] PostStudioRequest url
                     * @property {string|null} [cityId] PostStudioRequest cityId
                     * @property {string|null} [authorPlayerId] PostStudioRequest authorPlayerId
                     */

                    /**
                     * Constructs a new PostStudioRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostStudioRequest.
                     * @implements IPostStudioRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostStudioRequest=} [properties] Properties to set
                     */
                    function PostStudioRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostStudioRequest name.
                     * @member {string} name
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @instance
                     */
                    PostStudioRequest.prototype.name = "";

                    /**
                     * PostStudioRequest url.
                     * @member {string} url
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @instance
                     */
                    PostStudioRequest.prototype.url = "";

                    /**
                     * PostStudioRequest cityId.
                     * @member {string} cityId
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @instance
                     */
                    PostStudioRequest.prototype.cityId = "";

                    /**
                     * PostStudioRequest authorPlayerId.
                     * @member {string} authorPlayerId
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @instance
                     */
                    PostStudioRequest.prototype.authorPlayerId = "";

                    /**
                     * Creates a new PostStudioRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostStudioRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostStudioRequest} PostStudioRequest instance
                     */
                    PostStudioRequest.create = function create(properties) {
                        return new PostStudioRequest(properties);
                    };

                    /**
                     * Encodes the specified PostStudioRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostStudioRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostStudioRequest} message PostStudioRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostStudioRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
                        if (message.cityId != null && Object.hasOwnProperty.call(message, "cityId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.cityId);
                        if (message.authorPlayerId != null && Object.hasOwnProperty.call(message, "authorPlayerId"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.authorPlayerId);
                        return writer;
                    };

                    /**
                     * Encodes the specified PostStudioRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostStudioRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostStudioRequest} message PostStudioRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostStudioRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostStudioRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostStudioRequest} PostStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostStudioRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostStudioRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                message.url = reader.string();
                                break;
                            case 3:
                                message.cityId = reader.string();
                                break;
                            case 4:
                                message.authorPlayerId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostStudioRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostStudioRequest} PostStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostStudioRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostStudioRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostStudioRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.url != null && message.hasOwnProperty("url"))
                            if (!$util.isString(message.url))
                                return "url: string expected";
                        if (message.cityId != null && message.hasOwnProperty("cityId"))
                            if (!$util.isString(message.cityId))
                                return "cityId: string expected";
                        if (message.authorPlayerId != null && message.hasOwnProperty("authorPlayerId"))
                            if (!$util.isString(message.authorPlayerId))
                                return "authorPlayerId: string expected";
                        return null;
                    };

                    /**
                     * Creates a PostStudioRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostStudioRequest} PostStudioRequest
                     */
                    PostStudioRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostStudioRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostStudioRequest();
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.url != null)
                            message.url = String(object.url);
                        if (object.cityId != null)
                            message.cityId = String(object.cityId);
                        if (object.authorPlayerId != null)
                            message.authorPlayerId = String(object.authorPlayerId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostStudioRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostStudioRequest} message PostStudioRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostStudioRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name = "";
                            object.url = "";
                            object.cityId = "";
                            object.authorPlayerId = "";
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.url != null && message.hasOwnProperty("url"))
                            object.url = message.url;
                        if (message.cityId != null && message.hasOwnProperty("cityId"))
                            object.cityId = message.cityId;
                        if (message.authorPlayerId != null && message.hasOwnProperty("authorPlayerId"))
                            object.authorPlayerId = message.authorPlayerId;
                        return object;
                    };

                    /**
                     * Converts this PostStudioRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostStudioRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostStudioRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostStudioRequest;
                })();

                proto.PutStudioRequest = (function() {

                    /**
                     * Properties of a PutStudioRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutStudioRequest
                     * @property {pj.sakuchin.percussion.proto.IStudio|null} [studio] PutStudioRequest studio
                     */

                    /**
                     * Constructs a new PutStudioRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutStudioRequest.
                     * @implements IPutStudioRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutStudioRequest=} [properties] Properties to set
                     */
                    function PutStudioRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutStudioRequest studio.
                     * @member {pj.sakuchin.percussion.proto.IStudio|null|undefined} studio
                     * @memberof pj.sakuchin.percussion.proto.PutStudioRequest
                     * @instance
                     */
                    PutStudioRequest.prototype.studio = null;

                    /**
                     * Creates a new PutStudioRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutStudioRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutStudioRequest} PutStudioRequest instance
                     */
                    PutStudioRequest.create = function create(properties) {
                        return new PutStudioRequest(properties);
                    };

                    /**
                     * Encodes the specified PutStudioRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutStudioRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutStudioRequest} message PutStudioRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutStudioRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.studio != null && Object.hasOwnProperty.call(message, "studio"))
                            $root.pj.sakuchin.percussion.proto.Studio.encode(message.studio, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PutStudioRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutStudioRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutStudioRequest} message PutStudioRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutStudioRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutStudioRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutStudioRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutStudioRequest} PutStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutStudioRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutStudioRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.studio = $root.pj.sakuchin.percussion.proto.Studio.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutStudioRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutStudioRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutStudioRequest} PutStudioRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutStudioRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutStudioRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutStudioRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutStudioRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.studio != null && message.hasOwnProperty("studio")) {
                            var error = $root.pj.sakuchin.percussion.proto.Studio.verify(message.studio);
                            if (error)
                                return "studio." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a PutStudioRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutStudioRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutStudioRequest} PutStudioRequest
                     */
                    PutStudioRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutStudioRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutStudioRequest();
                        if (object.studio != null) {
                            if (typeof object.studio !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PutStudioRequest.studio: object expected");
                            message.studio = $root.pj.sakuchin.percussion.proto.Studio.fromObject(object.studio);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutStudioRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutStudioRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutStudioRequest} message PutStudioRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutStudioRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.studio = null;
                        if (message.studio != null && message.hasOwnProperty("studio"))
                            object.studio = $root.pj.sakuchin.percussion.proto.Studio.toObject(message.studio, options);
                        return object;
                    };

                    /**
                     * Converts this PutStudioRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutStudioRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutStudioRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutStudioRequest;
                })();

                proto.GetStudioHistoryEditResponse = (function() {

                    /**
                     * Properties of a GetStudioHistoryEditResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetStudioHistoryEditResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.IEditHistory>|null} [history] GetStudioHistoryEditResponse history
                     */

                    /**
                     * Constructs a new GetStudioHistoryEditResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetStudioHistoryEditResponse.
                     * @implements IGetStudioHistoryEditResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetStudioHistoryEditResponse=} [properties] Properties to set
                     */
                    function GetStudioHistoryEditResponse(properties) {
                        this.history = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetStudioHistoryEditResponse history.
                     * @member {Array.<pj.sakuchin.percussion.proto.IEditHistory>} history
                     * @memberof pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse
                     * @instance
                     */
                    GetStudioHistoryEditResponse.prototype.history = $util.emptyArray;

                    /**
                     * Creates a new GetStudioHistoryEditResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetStudioHistoryEditResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse} GetStudioHistoryEditResponse instance
                     */
                    GetStudioHistoryEditResponse.create = function create(properties) {
                        return new GetStudioHistoryEditResponse(properties);
                    };

                    /**
                     * Encodes the specified GetStudioHistoryEditResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetStudioHistoryEditResponse} message GetStudioHistoryEditResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetStudioHistoryEditResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.history != null && message.history.length)
                            for (var i = 0; i < message.history.length; ++i)
                                $root.pj.sakuchin.percussion.proto.EditHistory.encode(message.history[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetStudioHistoryEditResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetStudioHistoryEditResponse} message GetStudioHistoryEditResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetStudioHistoryEditResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetStudioHistoryEditResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse} GetStudioHistoryEditResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetStudioHistoryEditResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.history && message.history.length))
                                    message.history = [];
                                message.history.push($root.pj.sakuchin.percussion.proto.EditHistory.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetStudioHistoryEditResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse} GetStudioHistoryEditResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetStudioHistoryEditResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetStudioHistoryEditResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetStudioHistoryEditResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.history != null && message.hasOwnProperty("history")) {
                            if (!Array.isArray(message.history))
                                return "history: array expected";
                            for (var i = 0; i < message.history.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.EditHistory.verify(message.history[i]);
                                if (error)
                                    return "history." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetStudioHistoryEditResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse} GetStudioHistoryEditResponse
                     */
                    GetStudioHistoryEditResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse();
                        if (object.history) {
                            if (!Array.isArray(object.history))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse.history: array expected");
                            message.history = [];
                            for (var i = 0; i < object.history.length; ++i) {
                                if (typeof object.history[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse.history: object expected");
                                message.history[i] = $root.pj.sakuchin.percussion.proto.EditHistory.fromObject(object.history[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetStudioHistoryEditResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse} message GetStudioHistoryEditResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetStudioHistoryEditResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.history = [];
                        if (message.history && message.history.length) {
                            object.history = [];
                            for (var j = 0; j < message.history.length; ++j)
                                object.history[j] = $root.pj.sakuchin.percussion.proto.EditHistory.toObject(message.history[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetStudioHistoryEditResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetStudioHistoryEditResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetStudioHistoryEditResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetStudioHistoryEditResponse;
                })();

                proto.GetSuggestCityResponse = (function() {

                    /**
                     * Properties of a GetSuggestCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetSuggestCityResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] GetSuggestCityResponse cities
                     */

                    /**
                     * Constructs a new GetSuggestCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetSuggestCityResponse.
                     * @implements IGetSuggestCityResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetSuggestCityResponse=} [properties] Properties to set
                     */
                    function GetSuggestCityResponse(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetSuggestCityResponse cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @instance
                     */
                    GetSuggestCityResponse.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new GetSuggestCityResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetSuggestCityResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetSuggestCityResponse} GetSuggestCityResponse instance
                     */
                    GetSuggestCityResponse.create = function create(properties) {
                        return new GetSuggestCityResponse(properties);
                    };

                    /**
                     * Encodes the specified GetSuggestCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetSuggestCityResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetSuggestCityResponse} message GetSuggestCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetSuggestCityResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetSuggestCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetSuggestCityResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetSuggestCityResponse} message GetSuggestCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetSuggestCityResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetSuggestCityResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetSuggestCityResponse} GetSuggestCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetSuggestCityResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetSuggestCityResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetSuggestCityResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetSuggestCityResponse} GetSuggestCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetSuggestCityResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetSuggestCityResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetSuggestCityResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetSuggestCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetSuggestCityResponse} GetSuggestCityResponse
                     */
                    GetSuggestCityResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetSuggestCityResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetSuggestCityResponse();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetSuggestCityResponse.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetSuggestCityResponse.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetSuggestCityResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetSuggestCityResponse} message GetSuggestCityResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetSuggestCityResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetSuggestCityResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetSuggestCityResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetSuggestCityResponse;
                })();

                proto.User = (function() {

                    /**
                     * Properties of a User.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IUser
                     * @property {string|null} [id] User id
                     * @property {string|null} [name] User name
                     * @property {string|null} [photo] User photo
                     */

                    /**
                     * Constructs a new User.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a User.
                     * @implements IUser
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IUser=} [properties] Properties to set
                     */
                    function User(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * User id.
                     * @member {string} id
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @instance
                     */
                    User.prototype.id = "";

                    /**
                     * User name.
                     * @member {string} name
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @instance
                     */
                    User.prototype.name = "";

                    /**
                     * User photo.
                     * @member {string} photo
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @instance
                     */
                    User.prototype.photo = "";

                    /**
                     * Creates a new User instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUser=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.User} User instance
                     */
                    User.create = function create(properties) {
                        return new User(properties);
                    };

                    /**
                     * Encodes the specified User message. Does not implicitly {@link pj.sakuchin.percussion.proto.User.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUser} message User message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    User.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.photo != null && Object.hasOwnProperty.call(message, "photo"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.photo);
                        return writer;
                    };

                    /**
                     * Encodes the specified User message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.User.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUser} message User message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    User.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.User} User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    User.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.User();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.photo = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a User message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.User} User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    User.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a User message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    User.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.photo != null && message.hasOwnProperty("photo"))
                            if (!$util.isString(message.photo))
                                return "photo: string expected";
                        return null;
                    };

                    /**
                     * Creates a User message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.User} User
                     */
                    User.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.User)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.User();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.photo != null)
                            message.photo = String(object.photo);
                        return message;
                    };

                    /**
                     * Creates a plain object from a User message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {pj.sakuchin.percussion.proto.User} message User
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    User.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.name = "";
                            object.photo = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.photo != null && message.hasOwnProperty("photo"))
                            object.photo = message.photo;
                        return object;
                    };

                    /**
                     * Converts this User to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    User.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return User;
                })();

                proto.UserProfile = (function() {

                    /**
                     * Properties of a UserProfile.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IUserProfile
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [activeCities] UserProfile activeCities
                     */

                    /**
                     * Constructs a new UserProfile.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a UserProfile.
                     * @implements IUserProfile
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IUserProfile=} [properties] Properties to set
                     */
                    function UserProfile(properties) {
                        this.activeCities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UserProfile activeCities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} activeCities
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @instance
                     */
                    UserProfile.prototype.activeCities = $util.emptyArray;

                    /**
                     * Creates a new UserProfile instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUserProfile=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.UserProfile} UserProfile instance
                     */
                    UserProfile.create = function create(properties) {
                        return new UserProfile(properties);
                    };

                    /**
                     * Encodes the specified UserProfile message. Does not implicitly {@link pj.sakuchin.percussion.proto.UserProfile.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUserProfile} message UserProfile message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserProfile.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.activeCities != null && message.activeCities.length)
                            for (var i = 0; i < message.activeCities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.activeCities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified UserProfile message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.UserProfile.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUserProfile} message UserProfile message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserProfile.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a UserProfile message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.UserProfile} UserProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserProfile.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.UserProfile();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.activeCities && message.activeCities.length))
                                    message.activeCities = [];
                                message.activeCities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a UserProfile message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.UserProfile} UserProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserProfile.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a UserProfile message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UserProfile.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.activeCities != null && message.hasOwnProperty("activeCities")) {
                            if (!Array.isArray(message.activeCities))
                                return "activeCities: array expected";
                            for (var i = 0; i < message.activeCities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.activeCities[i]);
                                if (error)
                                    return "activeCities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a UserProfile message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.UserProfile} UserProfile
                     */
                    UserProfile.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.UserProfile)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.UserProfile();
                        if (object.activeCities) {
                            if (!Array.isArray(object.activeCities))
                                throw TypeError(".pj.sakuchin.percussion.proto.UserProfile.activeCities: array expected");
                            message.activeCities = [];
                            for (var i = 0; i < object.activeCities.length; ++i) {
                                if (typeof object.activeCities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.UserProfile.activeCities: object expected");
                                message.activeCities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.activeCities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a UserProfile message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {pj.sakuchin.percussion.proto.UserProfile} message UserProfile
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UserProfile.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.activeCities = [];
                        if (message.activeCities && message.activeCities.length) {
                            object.activeCities = [];
                            for (var j = 0; j < message.activeCities.length; ++j)
                                object.activeCities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.activeCities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this UserProfile to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UserProfile.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UserProfile;
                })();

                proto.SignupUserRequest = (function() {

                    /**
                     * Properties of a SignupUserRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface ISignupUserRequest
                     * @property {string|null} [token] SignupUserRequest token
                     */

                    /**
                     * Constructs a new SignupUserRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a SignupUserRequest.
                     * @implements ISignupUserRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.ISignupUserRequest=} [properties] Properties to set
                     */
                    function SignupUserRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SignupUserRequest token.
                     * @member {string} token
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @instance
                     */
                    SignupUserRequest.prototype.token = "";

                    /**
                     * Creates a new SignupUserRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.SignupUserRequest} SignupUserRequest instance
                     */
                    SignupUserRequest.create = function create(properties) {
                        return new SignupUserRequest(properties);
                    };

                    /**
                     * Encodes the specified SignupUserRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserRequest} message SignupUserRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SignupUserRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                        return writer;
                    };

                    /**
                     * Encodes the specified SignupUserRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserRequest} message SignupUserRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SignupUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SignupUserRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.SignupUserRequest} SignupUserRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SignupUserRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.SignupUserRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.token = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SignupUserRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.SignupUserRequest} SignupUserRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SignupUserRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SignupUserRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SignupUserRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.token != null && message.hasOwnProperty("token"))
                            if (!$util.isString(message.token))
                                return "token: string expected";
                        return null;
                    };

                    /**
                     * Creates a SignupUserRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.SignupUserRequest} SignupUserRequest
                     */
                    SignupUserRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.SignupUserRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.SignupUserRequest();
                        if (object.token != null)
                            message.token = String(object.token);
                        return message;
                    };

                    /**
                     * Creates a plain object from a SignupUserRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.SignupUserRequest} message SignupUserRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SignupUserRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.token = "";
                        if (message.token != null && message.hasOwnProperty("token"))
                            object.token = message.token;
                        return object;
                    };

                    /**
                     * Converts this SignupUserRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SignupUserRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SignupUserRequest;
                })();

                proto.SignupUserResponse = (function() {

                    /**
                     * Properties of a SignupUserResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface ISignupUserResponse
                     * @property {pj.sakuchin.percussion.proto.IUser|null} [user] SignupUserResponse user
                     */

                    /**
                     * Constructs a new SignupUserResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a SignupUserResponse.
                     * @implements ISignupUserResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.ISignupUserResponse=} [properties] Properties to set
                     */
                    function SignupUserResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SignupUserResponse user.
                     * @member {pj.sakuchin.percussion.proto.IUser|null|undefined} user
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @instance
                     */
                    SignupUserResponse.prototype.user = null;

                    /**
                     * Creates a new SignupUserResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.SignupUserResponse} SignupUserResponse instance
                     */
                    SignupUserResponse.create = function create(properties) {
                        return new SignupUserResponse(properties);
                    };

                    /**
                     * Encodes the specified SignupUserResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserResponse} message SignupUserResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SignupUserResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                            $root.pj.sakuchin.percussion.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified SignupUserResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserResponse} message SignupUserResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SignupUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SignupUserResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.SignupUserResponse} SignupUserResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SignupUserResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.SignupUserResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = $root.pj.sakuchin.percussion.proto.User.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SignupUserResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.SignupUserResponse} SignupUserResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SignupUserResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SignupUserResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SignupUserResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user != null && message.hasOwnProperty("user")) {
                            var error = $root.pj.sakuchin.percussion.proto.User.verify(message.user);
                            if (error)
                                return "user." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a SignupUserResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.SignupUserResponse} SignupUserResponse
                     */
                    SignupUserResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.SignupUserResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.SignupUserResponse();
                        if (object.user != null) {
                            if (typeof object.user !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.SignupUserResponse.user: object expected");
                            message.user = $root.pj.sakuchin.percussion.proto.User.fromObject(object.user);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a SignupUserResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.SignupUserResponse} message SignupUserResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SignupUserResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.user = null;
                        if (message.user != null && message.hasOwnProperty("user"))
                            object.user = $root.pj.sakuchin.percussion.proto.User.toObject(message.user, options);
                        return object;
                    };

                    /**
                     * Converts this SignupUserResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SignupUserResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SignupUserResponse;
                })();

                proto.PostUserLoginRequest = (function() {

                    /**
                     * Properties of a PostUserLoginRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostUserLoginRequest
                     * @property {string|null} [token] PostUserLoginRequest token
                     */

                    /**
                     * Constructs a new PostUserLoginRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostUserLoginRequest.
                     * @implements IPostUserLoginRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginRequest=} [properties] Properties to set
                     */
                    function PostUserLoginRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostUserLoginRequest token.
                     * @member {string} token
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @instance
                     */
                    PostUserLoginRequest.prototype.token = "";

                    /**
                     * Creates a new PostUserLoginRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginRequest} PostUserLoginRequest instance
                     */
                    PostUserLoginRequest.create = function create(properties) {
                        return new PostUserLoginRequest(properties);
                    };

                    /**
                     * Encodes the specified PostUserLoginRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginRequest} message PostUserLoginRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostUserLoginRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                        return writer;
                    };

                    /**
                     * Encodes the specified PostUserLoginRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginRequest} message PostUserLoginRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostUserLoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostUserLoginRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginRequest} PostUserLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostUserLoginRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostUserLoginRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.token = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostUserLoginRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginRequest} PostUserLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostUserLoginRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostUserLoginRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostUserLoginRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.token != null && message.hasOwnProperty("token"))
                            if (!$util.isString(message.token))
                                return "token: string expected";
                        return null;
                    };

                    /**
                     * Creates a PostUserLoginRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginRequest} PostUserLoginRequest
                     */
                    PostUserLoginRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostUserLoginRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostUserLoginRequest();
                        if (object.token != null)
                            message.token = String(object.token);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostUserLoginRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostUserLoginRequest} message PostUserLoginRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostUserLoginRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.token = "";
                        if (message.token != null && message.hasOwnProperty("token"))
                            object.token = message.token;
                        return object;
                    };

                    /**
                     * Converts this PostUserLoginRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostUserLoginRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostUserLoginRequest;
                })();

                proto.PostUserLoginResponse = (function() {

                    /**
                     * Properties of a PostUserLoginResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostUserLoginResponse
                     * @property {pj.sakuchin.percussion.proto.IUser|null} [user] PostUserLoginResponse user
                     */

                    /**
                     * Constructs a new PostUserLoginResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostUserLoginResponse.
                     * @implements IPostUserLoginResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginResponse=} [properties] Properties to set
                     */
                    function PostUserLoginResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostUserLoginResponse user.
                     * @member {pj.sakuchin.percussion.proto.IUser|null|undefined} user
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @instance
                     */
                    PostUserLoginResponse.prototype.user = null;

                    /**
                     * Creates a new PostUserLoginResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginResponse} PostUserLoginResponse instance
                     */
                    PostUserLoginResponse.create = function create(properties) {
                        return new PostUserLoginResponse(properties);
                    };

                    /**
                     * Encodes the specified PostUserLoginResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginResponse} message PostUserLoginResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostUserLoginResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                            $root.pj.sakuchin.percussion.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PostUserLoginResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginResponse} message PostUserLoginResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostUserLoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostUserLoginResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginResponse} PostUserLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostUserLoginResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostUserLoginResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = $root.pj.sakuchin.percussion.proto.User.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostUserLoginResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginResponse} PostUserLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostUserLoginResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostUserLoginResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostUserLoginResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user != null && message.hasOwnProperty("user")) {
                            var error = $root.pj.sakuchin.percussion.proto.User.verify(message.user);
                            if (error)
                                return "user." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a PostUserLoginResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginResponse} PostUserLoginResponse
                     */
                    PostUserLoginResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostUserLoginResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostUserLoginResponse();
                        if (object.user != null) {
                            if (typeof object.user !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PostUserLoginResponse.user: object expected");
                            message.user = $root.pj.sakuchin.percussion.proto.User.fromObject(object.user);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostUserLoginResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostUserLoginResponse} message PostUserLoginResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostUserLoginResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.user = null;
                        if (message.user != null && message.hasOwnProperty("user"))
                            object.user = $root.pj.sakuchin.percussion.proto.User.toObject(message.user, options);
                        return object;
                    };

                    /**
                     * Converts this PostUserLoginResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostUserLoginResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostUserLoginResponse;
                })();

                proto.GetUserProfileResponse = (function() {

                    /**
                     * Properties of a GetUserProfileResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetUserProfileResponse
                     * @property {pj.sakuchin.percussion.proto.IUser|null} [user] GetUserProfileResponse user
                     * @property {pj.sakuchin.percussion.proto.IUserProfile|null} [userProfile] GetUserProfileResponse userProfile
                     */

                    /**
                     * Constructs a new GetUserProfileResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetUserProfileResponse.
                     * @implements IGetUserProfileResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetUserProfileResponse=} [properties] Properties to set
                     */
                    function GetUserProfileResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetUserProfileResponse user.
                     * @member {pj.sakuchin.percussion.proto.IUser|null|undefined} user
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @instance
                     */
                    GetUserProfileResponse.prototype.user = null;

                    /**
                     * GetUserProfileResponse userProfile.
                     * @member {pj.sakuchin.percussion.proto.IUserProfile|null|undefined} userProfile
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @instance
                     */
                    GetUserProfileResponse.prototype.userProfile = null;

                    /**
                     * Creates a new GetUserProfileResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserProfileResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetUserProfileResponse} GetUserProfileResponse instance
                     */
                    GetUserProfileResponse.create = function create(properties) {
                        return new GetUserProfileResponse(properties);
                    };

                    /**
                     * Encodes the specified GetUserProfileResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserProfileResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserProfileResponse} message GetUserProfileResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetUserProfileResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                            $root.pj.sakuchin.percussion.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.userProfile != null && Object.hasOwnProperty.call(message, "userProfile"))
                            $root.pj.sakuchin.percussion.proto.UserProfile.encode(message.userProfile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetUserProfileResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserProfileResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserProfileResponse} message GetUserProfileResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetUserProfileResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetUserProfileResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetUserProfileResponse} GetUserProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetUserProfileResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetUserProfileResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = $root.pj.sakuchin.percussion.proto.User.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetUserProfileResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetUserProfileResponse} GetUserProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetUserProfileResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetUserProfileResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetUserProfileResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user != null && message.hasOwnProperty("user")) {
                            var error = $root.pj.sakuchin.percussion.proto.User.verify(message.user);
                            if (error)
                                return "user." + error;
                        }
                        if (message.userProfile != null && message.hasOwnProperty("userProfile")) {
                            var error = $root.pj.sakuchin.percussion.proto.UserProfile.verify(message.userProfile);
                            if (error)
                                return "userProfile." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a GetUserProfileResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetUserProfileResponse} GetUserProfileResponse
                     */
                    GetUserProfileResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetUserProfileResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetUserProfileResponse();
                        if (object.user != null) {
                            if (typeof object.user !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.GetUserProfileResponse.user: object expected");
                            message.user = $root.pj.sakuchin.percussion.proto.User.fromObject(object.user);
                        }
                        if (object.userProfile != null) {
                            if (typeof object.userProfile !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.GetUserProfileResponse.userProfile: object expected");
                            message.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.fromObject(object.userProfile);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetUserProfileResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetUserProfileResponse} message GetUserProfileResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetUserProfileResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.user = null;
                            object.userProfile = null;
                        }
                        if (message.user != null && message.hasOwnProperty("user"))
                            object.user = $root.pj.sakuchin.percussion.proto.User.toObject(message.user, options);
                        if (message.userProfile != null && message.hasOwnProperty("userProfile"))
                            object.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.toObject(message.userProfile, options);
                        return object;
                    };

                    /**
                     * Converts this GetUserProfileResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetUserProfileResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetUserProfileResponse;
                })();

                proto.PutUserProfileRequest = (function() {

                    /**
                     * Properties of a PutUserProfileRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutUserProfileRequest
                     * @property {pj.sakuchin.percussion.proto.IUser|null} [user] PutUserProfileRequest user
                     * @property {pj.sakuchin.percussion.proto.IUserProfile|null} [userProfile] PutUserProfileRequest userProfile
                     */

                    /**
                     * Constructs a new PutUserProfileRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutUserProfileRequest.
                     * @implements IPutUserProfileRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutUserProfileRequest=} [properties] Properties to set
                     */
                    function PutUserProfileRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutUserProfileRequest user.
                     * @member {pj.sakuchin.percussion.proto.IUser|null|undefined} user
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @instance
                     */
                    PutUserProfileRequest.prototype.user = null;

                    /**
                     * PutUserProfileRequest userProfile.
                     * @member {pj.sakuchin.percussion.proto.IUserProfile|null|undefined} userProfile
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @instance
                     */
                    PutUserProfileRequest.prototype.userProfile = null;

                    /**
                     * Creates a new PutUserProfileRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserProfileRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutUserProfileRequest} PutUserProfileRequest instance
                     */
                    PutUserProfileRequest.create = function create(properties) {
                        return new PutUserProfileRequest(properties);
                    };

                    /**
                     * Encodes the specified PutUserProfileRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserProfileRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserProfileRequest} message PutUserProfileRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutUserProfileRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                            $root.pj.sakuchin.percussion.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.userProfile != null && Object.hasOwnProperty.call(message, "userProfile"))
                            $root.pj.sakuchin.percussion.proto.UserProfile.encode(message.userProfile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PutUserProfileRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserProfileRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserProfileRequest} message PutUserProfileRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutUserProfileRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutUserProfileRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutUserProfileRequest} PutUserProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutUserProfileRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutUserProfileRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = $root.pj.sakuchin.percussion.proto.User.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutUserProfileRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutUserProfileRequest} PutUserProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutUserProfileRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutUserProfileRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutUserProfileRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user != null && message.hasOwnProperty("user")) {
                            var error = $root.pj.sakuchin.percussion.proto.User.verify(message.user);
                            if (error)
                                return "user." + error;
                        }
                        if (message.userProfile != null && message.hasOwnProperty("userProfile")) {
                            var error = $root.pj.sakuchin.percussion.proto.UserProfile.verify(message.userProfile);
                            if (error)
                                return "userProfile." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a PutUserProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutUserProfileRequest} PutUserProfileRequest
                     */
                    PutUserProfileRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutUserProfileRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutUserProfileRequest();
                        if (object.user != null) {
                            if (typeof object.user !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PutUserProfileRequest.user: object expected");
                            message.user = $root.pj.sakuchin.percussion.proto.User.fromObject(object.user);
                        }
                        if (object.userProfile != null) {
                            if (typeof object.userProfile !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PutUserProfileRequest.userProfile: object expected");
                            message.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.fromObject(object.userProfile);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutUserProfileRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutUserProfileRequest} message PutUserProfileRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutUserProfileRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.user = null;
                            object.userProfile = null;
                        }
                        if (message.user != null && message.hasOwnProperty("user"))
                            object.user = $root.pj.sakuchin.percussion.proto.User.toObject(message.user, options);
                        if (message.userProfile != null && message.hasOwnProperty("userProfile"))
                            object.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.toObject(message.userProfile, options);
                        return object;
                    };

                    /**
                     * Converts this PutUserProfileRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutUserProfileRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutUserProfileRequest;
                })();

                proto.PutUserCityRequest = (function() {

                    /**
                     * Properties of a PutUserCityRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutUserCityRequest
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] PutUserCityRequest cities
                     */

                    /**
                     * Constructs a new PutUserCityRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutUserCityRequest.
                     * @implements IPutUserCityRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutUserCityRequest=} [properties] Properties to set
                     */
                    function PutUserCityRequest(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutUserCityRequest cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @instance
                     */
                    PutUserCityRequest.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new PutUserCityRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserCityRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutUserCityRequest} PutUserCityRequest instance
                     */
                    PutUserCityRequest.create = function create(properties) {
                        return new PutUserCityRequest(properties);
                    };

                    /**
                     * Encodes the specified PutUserCityRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserCityRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserCityRequest} message PutUserCityRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutUserCityRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PutUserCityRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserCityRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserCityRequest} message PutUserCityRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutUserCityRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutUserCityRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutUserCityRequest} PutUserCityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutUserCityRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutUserCityRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutUserCityRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutUserCityRequest} PutUserCityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutUserCityRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutUserCityRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutUserCityRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PutUserCityRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutUserCityRequest} PutUserCityRequest
                     */
                    PutUserCityRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutUserCityRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutUserCityRequest();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.PutUserCityRequest.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PutUserCityRequest.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutUserCityRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutUserCityRequest} message PutUserCityRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutUserCityRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PutUserCityRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutUserCityRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutUserCityRequest;
                })();

                proto.GetUserCityResponse = (function() {

                    /**
                     * Properties of a GetUserCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetUserCityResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] GetUserCityResponse cities
                     */

                    /**
                     * Constructs a new GetUserCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetUserCityResponse.
                     * @implements IGetUserCityResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetUserCityResponse=} [properties] Properties to set
                     */
                    function GetUserCityResponse(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetUserCityResponse cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @instance
                     */
                    GetUserCityResponse.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new GetUserCityResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserCityResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetUserCityResponse} GetUserCityResponse instance
                     */
                    GetUserCityResponse.create = function create(properties) {
                        return new GetUserCityResponse(properties);
                    };

                    /**
                     * Encodes the specified GetUserCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserCityResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserCityResponse} message GetUserCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetUserCityResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetUserCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserCityResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserCityResponse} message GetUserCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetUserCityResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetUserCityResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetUserCityResponse} GetUserCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetUserCityResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetUserCityResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetUserCityResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetUserCityResponse} GetUserCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetUserCityResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetUserCityResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetUserCityResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetUserCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetUserCityResponse} GetUserCityResponse
                     */
                    GetUserCityResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetUserCityResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetUserCityResponse();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetUserCityResponse.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetUserCityResponse.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetUserCityResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetUserCityResponse} message GetUserCityResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetUserCityResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetUserCityResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetUserCityResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetUserCityResponse;
                })();

                return proto;
            })();

            return percussion;
        })();

        return sakuchin;
    })();

    return pj;
})();

module.exports = $root;
