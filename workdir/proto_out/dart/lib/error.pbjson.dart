///
//  Generated code. Do not modify.
//  source: proto/error.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use percussionApiErrorDescriptor instead')
const PercussionApiError$json = const {
  '1': 'PercussionApiError',
  '2': const [
    const {'1': 'errorCode', '3': 1, '4': 1, '5': 14, '6': '.pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode', '10': 'errorCode'},
    const {'1': 'message', '3': 2, '4': 1, '5': 9, '10': 'message'},
  ],
  '4': const [PercussionApiError_ErrorCode$json],
};

@$core.Deprecated('Use percussionApiErrorDescriptor instead')
const PercussionApiError_ErrorCode$json = const {
  '1': 'ErrorCode',
  '2': const [
    const {'1': 'UNKNOWN', '2': 0},
    const {'1': 'NO_TOKEN', '2': 1},
    const {'1': 'INVALID_FIREBASE_TOKEN', '2': 2},
    const {'1': 'USER_HAS_BEEN_ALREADY_REGISTERED', '2': 3},
    const {'1': 'DB_ERROR', '2': 4},
    const {'1': 'INVALID_PARAMETER', '2': 5},
    const {'1': 'AUTHENTICATION_ERROR', '2': 6},
    const {'1': 'LOGIN_REQUIRED', '2': 7},
  ],
};

/// Descriptor for `PercussionApiError`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List percussionApiErrorDescriptor = $convert.base64Decode('ChJQZXJjdXNzaW9uQXBpRXJyb3ISWAoJZXJyb3JDb2RlGAEgASgOMjoucGouc2FrdWNoaW4ucGVyY3Vzc2lvbi5wcm90by5QZXJjdXNzaW9uQXBpRXJyb3IuRXJyb3JDb2RlUgllcnJvckNvZGUSGAoHbWVzc2FnZRgCIAEoCVIHbWVzc2FnZSK7AQoJRXJyb3JDb2RlEgsKB1VOS05PV04QABIMCghOT19UT0tFThABEhoKFklOVkFMSURfRklSRUJBU0VfVE9LRU4QAhIkCiBVU0VSX0hBU19CRUVOX0FMUkVBRFlfUkVHSVNURVJFRBADEgwKCERCX0VSUk9SEAQSFQoRSU5WQUxJRF9QQVJBTUVURVIQBRIYChRBVVRIRU5USUNBVElPTl9FUlJPUhAGEhIKDkxPR0lOX1JFUVVJUkVEEAc=');
