///
//  Generated code. Do not modify.
//  source: proto/error.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class PercussionApiError_ErrorCode extends $pb.ProtobufEnum {
  static const PercussionApiError_ErrorCode UNKNOWN = PercussionApiError_ErrorCode._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'UNKNOWN');
  static const PercussionApiError_ErrorCode NO_TOKEN = PercussionApiError_ErrorCode._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'NO_TOKEN');
  static const PercussionApiError_ErrorCode INVALID_FIREBASE_TOKEN = PercussionApiError_ErrorCode._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_FIREBASE_TOKEN');
  static const PercussionApiError_ErrorCode USER_HAS_BEEN_ALREADY_REGISTERED = PercussionApiError_ErrorCode._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'USER_HAS_BEEN_ALREADY_REGISTERED');
  static const PercussionApiError_ErrorCode DB_ERROR = PercussionApiError_ErrorCode._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'DB_ERROR');
  static const PercussionApiError_ErrorCode INVALID_PARAMETER = PercussionApiError_ErrorCode._(5, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_PARAMETER');
  static const PercussionApiError_ErrorCode AUTHENTICATION_ERROR = PercussionApiError_ErrorCode._(6, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AUTHENTICATION_ERROR');
  static const PercussionApiError_ErrorCode LOGIN_REQUIRED = PercussionApiError_ErrorCode._(7, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'LOGIN_REQUIRED');

  static const $core.List<PercussionApiError_ErrorCode> values = <PercussionApiError_ErrorCode> [
    UNKNOWN,
    NO_TOKEN,
    INVALID_FIREBASE_TOKEN,
    USER_HAS_BEEN_ALREADY_REGISTERED,
    DB_ERROR,
    INVALID_PARAMETER,
    AUTHENTICATION_ERROR,
    LOGIN_REQUIRED,
  ];

  static final $core.Map<$core.int, PercussionApiError_ErrorCode> _byValue = $pb.ProtobufEnum.initByValue(values);
  static PercussionApiError_ErrorCode? valueOf($core.int value) => _byValue[value];

  const PercussionApiError_ErrorCode._($core.int v, $core.String n) : super(v, n);
}

